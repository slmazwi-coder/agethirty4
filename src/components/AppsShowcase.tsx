import { motion } from "framer-motion";
import { ExternalLink, Clock, Rocket, ShoppingCart, HardHat, FolderKanban, Wrench } from "lucide-react";

const launchedApps = [
  {
    name: "BuildTrack Pro",
    desc: "Construction project management with real-time progress tracking, resource allocation, and compliance reporting.",
    icon: HardHat,
    status: "live",
    tag: "Construction",
  },
  {
    name: "ShopForge",
    desc: "E-commerce storefront builder with AI-driven product recommendations and inventory management.",
    icon: ShoppingCart,
    status: "live",
    tag: "E-Commerce",
  },
  {
    name: "PlanSync",
    desc: "Engineering project collaboration platform with blueprint versioning and approval workflows.",
    icon: FolderKanban,
    status: "live",
    tag: "Project Management",
  },
];

const upcomingApps = [
  {
    name: "FieldOps",
    desc: "Mobile-first field operations tool for construction crews — scheduling, inspections, and incident reports.",
    icon: Wrench,
    tag: "Construction",
    eta: "Q2 2026",
  },
  {
    name: "TradeFlow",
    desc: "B2B marketplace connecting suppliers and contractors with automated procurement workflows.",
    icon: Rocket,
    tag: "E-Commerce",
    eta: "Q3 2026",
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
        <p className="text-muted-foreground max-w-xl text-lg">Launched and in development — each built to solve real problems at scale.</p>
      </motion.div>

      {/* Launched */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mb-16">
        {launchedApps.map((app) => (
          <motion.div key={app.name} variants={item} className="group relative rounded-lg p-6 glass hover:glow-border transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-md bg-primary/10">
                <app.icon size={22} className="text-primary" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
                <span className="text-xs text-green-400 font-medium">Live</span>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{app.tag}</span>
            <h3 className="text-xl font-display font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">{app.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
            <button className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Learn more <ExternalLink size={14} />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Upcoming */}
      <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
        <Clock size={20} className="text-primary" /> Coming Soon
      </h3>
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
        {upcomingApps.map((app) => (
          <motion.div key={app.name} variants={item} className="rounded-lg p-6 border border-dashed border-border bg-secondary/30 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-primary/10">
                <app.icon size={20} className="text-primary" />
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">{app.eta}</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{app.tag}</span>
            <h4 className="text-lg font-display font-semibold mt-1 mb-2">{app.name}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AppsShowcase;
