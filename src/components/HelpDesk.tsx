import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Clock, ArrowRight } from "lucide-react";

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
      info: "info@agethirty4.co.za",
      sub: "Official Case Tracking",
      link: "mailto:info@agethirty4.co.za"
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
    <section id="support" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-eyebrow">Customer Success</span>
          <h2 className="section-title">
            We're here to help
          </h2>
          <p className="section-desc">
            Stuck on a project or need technical guidance? Reach out to our engineering team.
            We typically respond within the hour.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl p-8 glass-strong glow-border space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
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
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  placeholder="info@agethirty4.co.za"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Service Area</label>
              <select
                value={form.app}
                onChange={(e) => setForm({ ...form, app: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
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
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                placeholder="How can we assist you today?"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all ${
                submitted
                  ? "bg-green-500 text-white"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
              }`}
            >
              {submitted ? (
                "Success! We'll be in touch"
              ) : (
                <>
                  Submit Request
                  <ArrowRight size={18} />
                </>
              )}
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
                className="block group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/20 transition-all duration-300"
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
