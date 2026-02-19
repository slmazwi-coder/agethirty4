import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Store, Shield, BarChart3 } from "lucide-react";

const apps = [
  {
    name: "Moreki",
    tagline: "The Visual Mall Experience",
    desc: "Browse stores, explore products, and shop across multiple vendors in one immersive digital space.",
    icon: Store,
    category: "E-Commerce",
    accentColor: "text-amber-400",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    name: "Brandified",
    tagline: "Supplier Verification Made Simple",
    desc: "Verify suppliers, check compliance documents, and build trust with verified badges before committing to deals.",
    icon: Shield,
    category: "E-Commerce",
    accentColor: "text-sky-400",
    gradient: "from-sky-500/10 to-blue-500/10",
  },
  {
    name: "ProjectFlow AI",
    tagline: "Construction PM, Reinvented",
    desc: "Interactive Gantt charts, resource tracking, and AI-assisted scheduling for construction and engineering teams.",
    icon: BarChart3,
    category: "Engineering & Construction",
    accentColor: "text-emerald-400",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AppsShowcase = () => (
  <section id="apps" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Our Products</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Apps that move industries</h2>
        <p className="text-muted-foreground max-w-xl text-lg">
          Purpose-built tools for e-commerce and construction — solving real problems at scale.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mb-12">
        {apps.map((app) => (
          <motion.div
            key={app.name}
            variants={item}
            className={`group relative rounded-lg p-6 glass hover:glow-border transition-all duration-300 bg-gradient-to-br ${app.gradient}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-md bg-primary/10">
                <app.icon size={22} className={app.accentColor} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{app.category}</span>
            </div>
            <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-primary transition-colors">{app.name}</h3>
            <p className={`text-sm font-medium ${app.accentColor} mb-2`}>{app.tagline}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{app.desc}</p>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400">In Development</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center">
        <Link
          to="/showroom"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          Explore the full showroom <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default AppsShowcase;
