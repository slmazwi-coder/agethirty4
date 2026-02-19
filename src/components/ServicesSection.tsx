import { motion } from "framer-motion";
import { Globe, Palette, BarChart3, Megaphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom-built, high-performance websites tailored for your brand — from landing pages to full platforms.",
  },
  {
    icon: Palette,
    title: "Brand & UI Design",
    desc: "Distinctive visual identities and intuitive interfaces that set you apart in crowded markets.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven campaigns across search, social, and content to grow your audience and revenue.",
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO",
    desc: "Deep performance insights and search optimization to keep you visible and competitive.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/20">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Services</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">We also build for you</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">Need a website, brand, or digital strategy? Our team delivers end-to-end solutions.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg p-6 glass text-center hover:glow-border transition-all duration-300 group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <svc.icon size={26} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{svc.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
