import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Phone, Clock } from "lucide-react";

const HelpDesk = () => {
  const [form, setForm] = useState({ name: "", email: "", app: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", app: "", message: "" });
  };

  const contactMethods = [
    { 
      icon: MessageCircle, 
      title: "WhatsApp Support", 
      info: "+27 61 612 2586", 
      sub: "Average response: 15 mins",
      link: "https://wa.me/27616122586?text=Hi%20Age%20Thirty%204%20Team"
    },
    { 
      icon: Mail, 
      title: "Email Support", 
      info: "slmazwi@gmail.com", 
      sub: "Official Case Tracking",
      link: "mailto:slmazwi@gmail.com"
    },
    { 
      icon: Phone, 
      title: "Direct Line", 
      info: "+27 61 612 2586", 
      sub: "Mon–Fri, 8AM – 6PM SAST",
      link: "tel:+27616122586" 
    },
  ];

  return (
    <section id="support" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-16 text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
            Customer Success
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            We're here to help
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            Stuck on a project or need technical guidance? Reach out to our 
            engineering team. We typically respond within the hour.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl p-8 glass glow-border space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Service Area</label>
              <select
                value={form.app}
                onChange={(e) => setForm({ ...form, app: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              >
                <option value="">General Inquiry</option>
                <option>Thirty4 PDF (Intelligence)</option>
                <option>Thirty4 Vision (AI Editor)</option>
                <option>Industrial Engineering</option>
                <option>E-commerce Solutions</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Your Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                placeholder="How can we assist you today?"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                submitted 
                ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]" 
                : "bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:-translate-y-1"
              }`}
            >
              {submitted ? "Success! We'll be in touch ✓" : "Submit Request"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map(({ icon: Icon, title, info, sub, link }) => (
              <a 
                key={title} 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-6 rounded-2xl glass hover:glow-border transition-all duration-500 border border-transparent hover:bg-secondary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{title}</h4>
                    <p className="text-foreground/90 font-medium mb-1">{info}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{sub}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelpDesk;