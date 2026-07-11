import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
    {/* Gold radial glow */}
    <div className="absolute inset-0 bg-gradient-hero" />

    {/* Grid overlay */}
    <div className="absolute inset-0 grid-pattern opacity-20" />

    {/* Floating glow orb */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse-glow" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-8">
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Building the future of industry
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-6 text-balance">
          AGE{" "}
          <span className="text-gradient">THIRTY4</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 text-balance">
          We engineer digital systems that turn complex workflows into automated success
          — for businesses, schools, and industries across South Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Explore Our Apps
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary"
          >
            About Us
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "6+", label: "Trusted Clients" },
            { value: "3", label: "Active Products" },
            { value: "24/7", label: "AI Support" },
            { value: "ZA", label: "Nationwide" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
