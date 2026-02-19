import { motion } from "framer-motion";
import { Heart, Users, GraduationCap, TreePine } from "lucide-react";

const stories = [
  {
    icon: GraduationCap,
    title: "Digital Skills Academy",
    desc: "Training 500+ young developers annually across underserved communities in partnership with local tech hubs.",
    stat: "500+",
    label: "Graduates",
  },
  {
    icon: TreePine,
    title: "Green Build Initiative",
    desc: "Sponsoring sustainable construction practices and carbon-neutral building projects across the region.",
    stat: "12",
    label: "Projects Funded",
  },
  {
    icon: Users,
    title: "Community Road Shows",
    desc: "Monthly tech expos and demo days bringing innovation directly to townships and rural communities.",
    stat: "30+",
    label: "Events Hosted",
  },
  {
    icon: Heart,
    title: "Open Source Contributions",
    desc: "Publishing core utilities and frameworks as open-source tools for the wider developer community.",
    stat: "8",
    label: "Repos Published",
  },
];

const SocialImpact = () => (
  <section id="impact" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Social Impact</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Beyond the bottom line</h2>
        <p className="text-muted-foreground max-w-xl text-lg">We believe technology should lift communities. Here's how we're giving back.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story, i) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg p-6 glass hover:glow-border transition-all duration-300"
          >
            <story.icon size={28} className="text-primary mb-4" />
            <div className="text-3xl font-display font-bold text-gradient mb-0.5">{story.stat}</div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">{story.label}</span>
            <h3 className="font-display font-semibold text-lg mt-4 mb-2">{story.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{story.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialImpact;
