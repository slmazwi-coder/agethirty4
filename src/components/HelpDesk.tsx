import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Phone } from "lucide-react";

const HelpDesk = () => {
  const [form, setForm] = useState({ name: "", email: "", app: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", app: "", message: "" });
  };

  return (
    <section id="support" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Support</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">We're here to help</h2>
          <p className="text-muted-foreground max-w-xl text-lg">Stuck on something? Reach out and our team will get back to you within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-lg p-8 glass glow-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Related App</label>
              <select
                value={form.app}
                onChange={(e) => setForm({ ...form, app: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              >
                <option value="">Select an app (optional)</option>
                <option>BuildTrack Pro</option>
                <option>ShopForge</option>
                <option>PlanSync</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                placeholder="Describe your issue or question..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
              {submitted ? "Sent! ✓" : <><Send size={16} /> Send Message</>}
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: MessageCircle, title: "Live Chat", info: "Available weekdays 8AM – 6PM SAST", sub: "Avg response: 5 min" },
              { icon: Mail, title: "Email", info: "support@agethirty4.com", sub: "We respond within 24h" },
              { icon: Phone, title: "Phone", info: "+27 11 000 0000", sub: "Mon–Fri, 9AM – 5PM" },
            ].map(({ icon: Icon, title, info, sub }) => (
              <div key={title} className="rounded-lg p-6 glass hover:glow-border transition-all duration-300">
                <Icon size={24} className="text-primary mb-3" />
                <h4 className="font-display font-semibold mb-1">{title}</h4>
                <p className="text-sm text-foreground">{info}</p>
                <p className="text-xs text-muted-foreground mt-1">{sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelpDesk;
