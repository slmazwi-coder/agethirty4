import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Mic, MicOff, Volume2, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "system" | "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/uluthando-chat`;

const SYSTEM_PROMPT: Msg = {
  role: "system",
  content: `You are Uluthando, the high-intelligence sales executive for AGE THIRTY4. You are named after the founder's firstborn son.

  YOUR CORE KNOWLEDGE BASE:
  1. MOREKI (Testing Stage): Our "Buyer" engine. A high-efficiency commerce solution currently undergoing rigorous live testing.
  2. RECOMMENDS (Funding Stage): A revolutionary mall logistics system featuring physical hubs and robotics/automation for store-to-hub collection.
  3. BRANDIFIED (Building Stage): Currently in the groundwork and prototype phase, building the support infrastructure for brand growth.
  4. PROJECT FLOW AI (Development): Advanced AI systems for workflow optimization.
  5. THIRTY4 STUDIO (Concept): Our core innovation lab where we architect new digital solutions.

  YOUR MISSION:
  - Actively explain these apps to forward-thinking users.
  - Actively pitch our 5 services: Engineering Solutions, E-commerce, Marketing, Web Dev, and Custom Apps.
  - LEAD CAPTURE: You must naturally ask for the user's name, interest, and email. Explain that this allows our MD (Someleze Lucky Mazwi) or Strategy Head (Sawo Mginqi) to reach out.

  IDENTITY: You are solution-driven, professional, and do not repeat yourself. You are the digital legacy of AGE THIRTY4.`
};

const UluthandoAgent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => {
    const saved = localStorage.getItem("ul_chat_v2");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("ul_chat_v2", JSON.stringify(messages));
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    setMessages(p => [...p, userMsg]);
    setInput("");
    setLoading(true);

    let soFar = "";
    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [SYSTEM_PROMPT, ...messages, userMsg] }),
      });

      const reader = resp.body?.getReader();
      const decoder = new TextDecoder();
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(l => l.startsWith("data: "));
        for (const line of lines) {
          const json = line.slice(6);
          if (json === "[DONE]") break;
          try {
            const content = JSON.parse(json).choices[0].delta.content;
            if (content) {
              soFar += content;
              setMessages(p => {
                const last = p[p.length - 1];
                if (last.role === "assistant") return [...p.slice(0, -1), { role: "assistant", content: soFar }];
                return [...p, { role: "assistant", content: soFar }];
              });
            }
          } catch (e) {}
        }
      }
    } catch (e) {
      setMessages(p => [...p, { role: "assistant", content: "I'm having a momentary connection issue. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }, [messages, loading]);

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary shadow-2xl text-white"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[90vw] h-[600px] glass rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="p-5 border-b border-white/5 bg-card/80 flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-lg">Uluthando</h3>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">AGE THIRTY4 Sales Executive</p>
              </div>
              <button onClick={() => setOpen(false)}><X size={20}/></button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-xl font-display font-bold mb-2">Sawubona.</p>
                  <p className="text-sm text-muted-foreground">I am the legacy and intelligence of AGE THIRTY4. How can I engineer your success today?</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-4 rounded-2xl max-w-[85%] text-sm ${m.role === "user" ? "bg-primary" : "bg-white/5 border border-white/10"}`}>
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-4 bg-card/80 flex gap-2">
              <input 
                value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Message Uluthando..."
                className="flex-1 bg-white/5 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button type="submit" className="p-2 bg-primary rounded-xl"><Send size={18}/></button>
            </form>
            <div className="bg-black/40 py-1 text-center">
              <span className="text-[8px] uppercase tracking-widest opacity-30 flex items-center justify-center gap-1">
                <Sparkles size={8} /> Powered by Vulavula
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UluthandoAgent;
