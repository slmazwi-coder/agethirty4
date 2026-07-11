import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Terminal } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "system" | "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/uluthando-chat`;

const SYSTEM_PROMPT: Msg = {
  role: "system",
  content: `You are Uluthando, the high-intelligence sales executive for AGE THIRTY4. 
  
  CORE MISSION:
  - Do NOT tell users to "visit the website." They are currently ON the website. 
  - If they ask about any unreleased products, let them know it is still in development.

  APP PORTFOLIO:
  1. RECOMMENDS: Mall logistics/robotics (Funding phase).
  3. BRANDIFIED: Building prototype/groundwork.
  4. PROJECT FLOW AI: Streamlining industrial workflows.
  5. THIRTY4 STUDIO: Concept incubator.

  IDENTITY: You are solution-driven and named after the founder's firstborn son. Be proactive in asking for Name/Email to capture leads.`
};

const UluthandoAgent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Msg = { role: "user", content: text.trim() };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [SYSTEM_PROMPT, ...messages, userMsg] }),
      });

      if (!resp.body) return;

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let soFar = "";
      let residual = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = (residual + chunk).split("\n");
        residual = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.replace("data: ", "").trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              soFar += content;
              setMessages((p) => {
                const last = p[p.length - 1];
                if (last?.role === "assistant") {
                  return [...p.slice(0, -1), { ...last, content: soFar }];
                }
                return [...p, { role: "assistant", content: soFar }];
              });
            }
          } catch { /* ignore malformed stream chunks */ }
        }
      }
    } catch (err) {
      console.error("Stream error:", err);
    } finally {
      setLoading(false);
    }
  }, [messages, loading]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 p-4 bg-primary rounded-full text-primary-foreground shadow-glow z-50 hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[90vw] h-[600px] flex flex-col rounded-2xl glass-strong shadow-2xl overflow-hidden border border-primary/20">

            {/* Header */}
            <div className="p-5 bg-card/90 border-b border-border/30 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Uluthando</h3>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Age Thirty4 AI Executive</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                <span className="text-[8px] font-bold text-primary tracking-tighter uppercase">Vulavula Inside</span>
              </div>
              <button onClick={() => setOpen(false)} className="hover:bg-foreground/10 p-1 rounded-full transition-colors"><X size={18} /></button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-background/50">
              {messages.length === 0 && (
                <div className="text-center py-10 opacity-50">
                   <Terminal size={40} className="mx-auto mb-4" />
                   <p className="text-sm">Sawubona. How shall we engineer your success?</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === "user" ? "bg-primary shadow-glow-sm" : "bg-card border border-border/50"}`}>
                    <ReactMarkdown className="prose prose-invert prose-sm">{m.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-4 bg-card/90 flex gap-2 border-t border-border/30">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Message Uluthando..." className="flex-1 bg-surface rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-border/50" />
              <button type="submit" disabled={!input.trim() || loading} className="p-3 bg-primary rounded-xl text-primary-foreground disabled:opacity-50 hover:shadow-glow-sm transition-all"><Send size={18}/></button>
            </form>

            {/* Footer Badge */}
            <div className="pb-3 text-center bg-card/90">
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-30 flex items-center justify-center gap-1">
                <Sparkles size={10} /> Powered by Vulavula
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UluthandoAgent;
