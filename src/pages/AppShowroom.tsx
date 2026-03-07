import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Shield,
  BarChart3,
  ArrowLeft,
  Store,
  CheckCircle2,
  HardHat,
  Package,
  Search,
  BadgeCheck,
  Play,
  MapPin,
  Cpu,
  Clock,
  GanttChart,
  FileCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppShowroom = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              App Showroom
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Tools built for <span className="text-gradient">real industries</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg md:text-xl leading-relaxed">
              Explore the functional Moreki prototype and our upcoming June 2026 rollout plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Moreki Section - Hardcoded for Link Stability */}
      <section id="ecommerce" className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-md bg-primary/10">
              <ShoppingCart size={22} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold">E-Commerce</h2>
          </div>

          <div className="rounded-2xl p-8 md:p-12 glass glow-border bg-gradient-to-br from-orange-500/20 to-amber-500/20 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Store size={36} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-3xl md:text-4xl font-display font-bold">Moreki</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400">
                    Beta Live
                  </span>
                </div>
                <p className="text-lg font-medium text-amber-400 mb-3">
                  Your Entire Mall in One App — Powered by Gemini 3.1
                </p>
                <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                  Moreki treats your local mall as a single, unified warehouse. Browse every store simultaneously, compare prices, and use voice commands to shop. Launching June 2026.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <MapPin size={18} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Mall Explorer</h4>
                  <p className="text-xs text-muted-foreground">GPS pinpointing for instant mall directory access.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <Cpu size={18} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Gemini 3.1 AI</h4>
                  <p className="text-xs text-muted-foreground">Advanced reasoning and South African slang support.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <BadgeCheck size={18} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">June 2026 Rollout</h4>
                  <p className="text-xs text-muted-foreground">Rolling out to 10 major SA hubs this winter.</p>
                </div>
              </div>
            </div>

            {/* THE BUTTON - DIRECT EXTERNAL LINK */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground italic">
                  * Opens the fully functional prototype on Firebase.
                </p>
                <a
                  href="https://studio--studio-7917528504-89a87.us-central1.hosted.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-[1.05] active:scale-[0.98] transition-all shadow-xl shadow-primary/30 w-fit cursor-pointer"
                >
                  <Play size={20} fill="currentColor" />
                  LAUNCH LIVE PROTOTYPE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Interested in early access?</h2>
          <p className="text-muted-foreground mb-8">
            Get notified when we expand to your province or reach out for a private demo.
          </p>
          <Link
            to="/#support"
            className="px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppShowroom;