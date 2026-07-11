import { motion } from "framer-motion";
import { Code, Globe, Megaphone, PencilRuler, Layers } from "lucide-react";

const services = [
  {
    title: "Engineering Solutions",
    description: "Digital tools designed with structural precision for the construction and engineering sectors.",
    icon: <PencilRuler className="w-6 h-6" />,
  },
  {
    title: "E-commerce Systems",
    description: "High-conversion digital storefronts built to scale your retail operations globally.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Strategic Marketing",
    description: "Data-driven brand growth and digital narratives that connect with the Sub-Saharan market.",
    icon: <Megaphone className="w-6 h-6" />,
  },
  {
    title: "Web Development",
    description: "Fast, responsive, and secure web architectures built for modern performance.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Custom App Development",
    description: "Bespoke mobile and web applications built to run your internal business operations or complex commerce engines. Engineered for efficiency, not just aesthetics.",
    icon: <Layers className="w-6 h-6" />,
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-gradient-to-b from-secondary/20 via-background to-background">
    <div className="max-w-7xl mx-auto">
      <div className="section-header">
        <span className="section-eyebrow">Our Expertise</span>
        <h2 className="section-title">
          Solutions for the <span className="text-gradient">Forward-Thinking</span>
        </h2>
        <p className="section-desc">
          We combine engineering discipline with modern design to deliver systems that are fast, reliable, and ready to scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
