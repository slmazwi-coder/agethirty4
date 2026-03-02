import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Phone, Clock } from "lucide-react";

const HelpDesk = () => {
  const [form, setForm] = useState({ name: "", email: "", app: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API. 
    // For now, it shows the "Success" state.
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
      link: "https://wa.me/27616122586?text=Hi%20Age%20Thirty%204%20Team,%20I%20need%20assistance%20with..."
    },
    { 
      icon: Mail, 
      title: "Email Support", 
      info: "slmazwi@gmail.com", 
      sub: "Official Case Tracking",
      link: "mailto:slmazwi@gmail.com?subject=Support%20Inquiry%20-%20Age%20Thirty%204"
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
          {/* Support Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl p-8 glass glow-border space-y-6 relative overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm