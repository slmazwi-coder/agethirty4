import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Mic, MicOff, Volume2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/uluthando-chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (t: string) => void;
  onDone: () => void;
  onError: (e: string) => void;
}) {
  try {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({ error: "Network error" }));
      onError(err.error || "Something went wrong");
      return;
    }

    if (!resp.body) { onError("No response body"); return; }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buf = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });

      let nl: number;
      while ((nl = buf.indexOf("\n")) !== -1) {
        let line = buf.slice(0, nl);
        buf = buf.slice(nl + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (!line.startsWith("data: ")) continue;
        const json = line.slice(6).trim();
        if (json === "[DONE]") { onDone(); return; }
        try {
          const parsed = JSON.parse(json);
          const c = parsed.choices?.[0]?.delta?.content;
          if (c) onDelta(c);
        } catch {
          buf = line + "\n" + buf;
          break;
        }
      }
    }
    onDone();
  } catch {
    onError("Connection failed. Please try again.");
  }
}

const UluthandoAgent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setLoading(true);

    let soFar = "";
    const upsert = (chunk: string) => {
      soFar += chunk;
      setMessages((p) => {
        const last = p[p.length - 1];
        if (last?.role === "assistant") {
          return p.map((m, i) => (i === p.length - 1 ? { ...m, content: soFar } : m));
        }
        return [...p, { role: "assistant", content: soFar }];
      });
    };

    await streamChat({
      messages: [...messages, userMsg],
      onDelta: upsert,
      onDone: () => setLoading(false),
      onError: (err) => {
        setMessages((p) => [...p, { role: "assistant", content: `⚠️ ${err}` }]);
        setLoading(false);
      },
    });
  }, [messages, loading]);

  const toggleVoice = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    if (listening && recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      send(transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }, [listening, send]);

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Open Uluthando"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl glass glow-border shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-card/80">
              <div>
                <h3 className="font-display font-bold text-foreground text-base">Uluthando</h3>
                <p className="text-xs text-muted-foreground">AGE THIRTY4 AI Assistant</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-secondary transition-colors text-muted-foreground">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center mt-8">
                  <p className="text-lg font-display font-bold text-foreground mb-1">👋 Hi, I'm Uluthando</p>
                  <p className="text-sm text-muted-foreground">Ask me anything about AGE THIRTY4, our apps, or how we can help your business.</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-secondary-foreground rounded-bl-sm"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="flex gap-2">
                        <div className="prose prose-sm prose-invert max-w-none [&>p]:m-0">
                          <ReactMarkdown>{m.content}</ReactMarkdown>
                        </div>
                        <button
                          onClick={() => speakText(m.content)}
                          className="shrink-0 mt-0.5 text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Read aloud"
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}
              {loading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-xl px-4 py-3 rounded-bl-sm">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-center gap-2 px-4 py-3 border-t border-border/50 bg-card/80"
            >
              <button
                type="button"
                onClick={toggleVoice}
                className={`p-2 rounded-lg transition-colors ${listening ? "bg-destructive/20 text-destructive" : "hover:bg-secondary text-muted-foreground"}`}
                aria-label={listening ? "Stop listening" : "Voice input"}
              >
                {listening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={listening ? "Listening..." : "Ask Uluthando..."}
                disabled={loading}
                className="flex-1 bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UluthandoAgent;
