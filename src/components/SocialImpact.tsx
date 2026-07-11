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
      <div className="section-header">
        <span className="section-eyebrow">Social Impact</span>
        <h2 className="section-title">Beyond the bottom line</h2>
        <p className="section-desc">We believe technology should lift communities. Here's how we're giving back.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story, i) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card"
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
