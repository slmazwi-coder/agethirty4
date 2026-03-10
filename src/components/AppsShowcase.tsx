import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const apps = [
  {
    category: "E-Commerce",
    title: "Moreki",
    subtitle: "Your Nearest Mall, One Voice Command",
    description: "South Africa's first virtual mall app — voice-powered shopping lists, smart price comparisons, unified checkout, and delivery or mall-hub collection across every store.",
    status: "Ready for Testing",
    link: "https://studio--studio-7917528504-89a87.us-central1.hosted.app/",
    hasVideo: true,
    videoSrc: "/assets/videos/MOREKI APP Presentation 1.mp4",
    tags: ["Voice-Commerce", "Logistics", "Retail"]
  },
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
    <section id="apps" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
            Explore the Full <span className="text-primary">Showroom.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border border-white/5 bg-gradient-to-br from-secondary/10 to-transparent flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                  {app.category}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  app.status === "Ready for Testing" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-white/5 text-muted-foreground border border-white/10"
                }`}>
                  {app.status}
                </span>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-3xl font-bold mb-1">{app.title}</h4>
                <p className="text-primary text-sm font-medium mb-4">{app.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {app.description}
                </p>

                {app.hasVideo && (
                  <div className="w-full aspect-video bg-black/40 rounded-2xl mb-8 border border-white/5 relative overflow-hidden">
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
                    <span key={tag} className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-muted-foreground border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={app.link}
                  target={app.status === "Ready for Testing" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all ${
                    app.status === "Ready for Testing" 
                      ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20" 
                      : "bg-white/5 text-muted-foreground cursor-not-allowed italic border border-white/10"
                  }`}
                >
                  {app.status === "Ready for Testing" ? "Start Testing Moreki" : "Coming Soon"}
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