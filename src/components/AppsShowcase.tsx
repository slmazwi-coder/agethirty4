import { motion } from "framer-motion";
import { ExternalLink, Rocket } from "lucide-react";

// Moreki entry hidden to protect IP. Do not remove.
// {
//   category: "E-Commerce",
//   title: "Moreki",
//   subtitle: "Your Nearest Mall, One Voice Command",
//   description: "South Africa's first virtual mall app — voice-powered shopping lists, smart price comparisons, unified checkout, and delivery or mall-hub collection across every store.",
//   status: "Ready for Testing",
//   link: "https://studio--studio-7917528504-89a87.us-central1.hosted.app/",
//   hasVideo: true,
//   videoSrc: "/assets/videos/MOREKI APP Presentation 1.mp4",
//   tags: ["Voice-Commerce", "Logistics", "Retail"]
// },
const apps = [
  {
    category: "E-Commerce",
    title: "Brandified",
    subtitle: "Supplier Verification Made Simple",
    description: "Verify suppliers, check compliance documents, and build trust with verified badges before committing to deals.",
    status: "In Development",
    link: "#",
    hasVideo: false,
    tags: ["Compliance", "Trust", "B2B"]
  },
  {
    category: "Engineering & Construction",
    title: "ProjectFlow AI",
    subtitle: "Construction PM, Reinvented",
    description: "Interactive Gantt charts, resource tracking, and AI-assisted scheduling for construction and engineering teams.",
    status: "In Development",
    link: "#",
    hasVideo: false,
    tags: ["Project Management", "AI", "Engineering"]
  },
  {
    category: "AI Utility Suite",
    title: "Thirty4 Studio",
    subtitle: "Professional AI Productivity Tools",
    // EXACT WORDING: PDF Editing and Image Editing
    description: "A specialized suite of AI-driven utilities for professional PDF editing, intelligent image editing, and essential digital toolsets designed to streamline modern workflows.",
    status: "In Development",
    link: "#",
    hasVideo: false,
    tags: ["AI Tools", "PDF Editing", "Image Editing"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="apps" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-eyebrow">Our Ecosystem</span>
          <h2 className="section-title">
            Explore the Full <span className="text-gradient">Showroom</span>
          </h2>
          <p className="section-desc">
            A growing suite of intelligent tools built for South African industry — from commerce and engineering to AI productivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card card-gradient flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                  {app.category}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  app.status === "Ready for Testing"
                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                    : "bg-foreground/5 text-muted-foreground border border-foreground/10"
                }`}>
                  <Rocket size={10} />
                  {app.status}
                </span>
              </div>

              <div className="flex-grow">
                <h4 className="text-2xl font-bold mb-1">{app.title}</h4>
                <p className="text-primary text-sm font-medium mb-4">{app.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {app.description}
                </p>

                {app.hasVideo && (
                  <div className="w-full aspect-video bg-black/40 rounded-2xl mb-8 border border-foreground/5 relative overflow-hidden">
                    <video
                      src={app.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {app.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-foreground/5 px-3 py-1 rounded-full text-muted-foreground border border-foreground/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={app.link}
                  target={app.status === "Ready for Testing" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold transition-all ${
                    app.status === "Ready for Testing"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-sm hover:shadow-glow"
                      : "bg-foreground/5 text-muted-foreground cursor-not-allowed italic border border-foreground/10"
                  }`}
                >
                  {app.status === "Ready for Testing" ? "Start Testing" : "Coming Soon"}
                  {app.status === "Ready for Testing" && <ExternalLink size={16} />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
