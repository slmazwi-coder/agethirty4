import { motion } from "framer-motion";
import { Code, Globe, Megaphone, PencilRuler, Layers } from "lucide-react";

const services = [
  {
    title: "Engineering Solutions",
    description: "Digital tools designed with structural precision for the construction and engineering sectors.",
    icon: <PencilRuler className="w-8 h-8 text-primary" />,
  },
  {
    title: "E-commerce Systems",
    description: "High-conversion digital storefronts built to scale your retail operations globally.",
    icon: <Globe className="w-8 h-8 text-primary" />,
  },
  {
    title: "Strategic Marketing",
    description: "Data-driven brand growth and digital narratives that connect with the Sub-Saharan market.",
    icon: <Megaphone className="w-8 h-8 text-primary" />,
  },
  {
    title: "Web Development",
    description: "Fast, responsive, and secure web architectures built for modern performance.",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    title: "Custom App Development",
    description: "Bespoke mobile and web applications built to run your internal business operations or complex commerce engines. Engineered for efficiency, not just aesthetics.",
    icon: <Layers className="w-8 h-8 text-primary" />,
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-secondary/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Expertise</span>
        <h2 className="text-4xl font-display font-bold mt-4">Solutions for the Forward-Thinking</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl glass border border-foreground/5 hover:glow-border transition-all"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;