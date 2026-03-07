import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Shield,
  BarChart3,
  ArrowLeft,
  Store,
  CheckCircle2,
  Clock,
  GanttChart,
  FileCheck,
  HardHat,
  Package,
  Search,
  BadgeCheck,
  Play,
  MapPin,
  Cpu,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "construction", label: "Engineering & Construction", icon: HardHat },
];

const apps = [
  {
    id: "moreki",
    category: "ecommerce",
    name: "Moreki",
    tagline: "Your Entire Mall in One App — Powered by Gemini 3.1",
    status: "Beta Live",
    statusColor: "text-emerald-400",
    statusBg: "bg-emerald-400/10",
    description:
      "Moreki is South Africa's first integrated virtual mall ecosystem. It treats your local mall as a single, unified warehouse where you can browse every store simultaneously. Launching officially across 10 flagship SA malls in June 2026.",
    icon: Store,
    testLink: "https://studio--studio-7917528504-89a87.us-central1.hosted.app/",
    features: [
      { icon: MapPin, label: "Mall Explorer", desc: "Automated GPS pinpointing to instantly open the digital directory of your nearest shopping center." },
      { icon: Cpu, label: "Gemini 3.1 Flagship AI", desc: "High-performance reasoning for 'Car Prep Mode' that understands SA slang and optimizes lists by price." },
      { icon: Search, label: "Unified Warehouse Search", desc: "Search once to see stock across multiple retailers in the same mall." },
      { icon: Package, label: "Single-Point Collection", desc: "Pay once for items from 5 different stores and collect them from one central mall hub." },
      { icon: BadgeCheck, label: "June 2026 Rollout", desc: "Phase 1 activation for the first 10 major malls across all 9 provinces." },
      { icon: Clock, label: "Voice-First 'Car Prep'", desc: "Safe, hands-free voice interface for building lists while driving to the mall." },
    ],
    useCases: [
      "Professionals using 'Car Prep Mode' to finalize shopping while driving",
      "Families coordinating large monthly grocery runs across multiple vendors",
      "Mall owners wanting to convert physical foot traffic into digital logistics hubs",
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
    accentColor: "text-amber-400",
  },
  {
    id: "brandified",
    category: "ecommerce",
    name: "Brandified",
    tagline: "Supplier Verification Made Simple",
    status: "In Development",
    statusColor: "text-sky-400",
    statusBg: "bg-sky-400/10",
    description: "Verify suppliers, check compliance, and build trust with verified badges.",
    icon: Shield,
    features: [
      { icon: Search, label: "Supplier discovery", desc: "Find verified suppliers across industries." },
      { icon: BadgeCheck, label: "Verification badges", desc: "Trusted status indicators." },
    ],
    useCases: ["Procurement teams", "Construction contractors"],
    gradient: "from-sky-500/20 to-blue-500/20",
    accentColor: "text-sky-400",
  },
  {
    id: "projectflow",
    category: "construction",
    name: "ProjectFlow AI",
    tagline: "Construction Management, Reinvented",
    status: "In Development",
    statusColor: "text-emerald-400",
    statusBg: "bg-emerald-400/10",
    description: "Engineering-grade project management with AI-assisted scheduling.",
    icon: BarChart3,
    features: [
      { icon: GanttChart, label: "Gantt Charts", desc: "Plan tasks with drag-and-drop timelines." },
      { icon: HardHat, label: "Site Dashboards", desc: "Clear, actionable, mobile-friendly views." },
    ],
    useCases: ["Civil engineering teams", "Project managers"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AppShowroom = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">App Showroom</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Tools built for <span className="text-gradient">real industries</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Explore the functional Moreki prototype and our upcoming June 2026 rollout plan.
          </p>
        </motion.div>
      </div>
    </section>

    {categories.map((cat) => (
      <section key={cat.id} id={cat.id} className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-md bg-primary/10"><cat.icon size={22} className="text-primary" /></div>
            <h2 className="text-2xl md:text-3xl font-display font-bold">{cat.label}</h2>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-16">
            {apps.filter((a) => a.category === cat.id).map((app) => (
              <motion.div key={app.id} variants={item}>
                <div className={`rounded-2xl p-8 md:p-12 glass glow-border bg-gradient-to-br ${app.gradient}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
                    <div className="p-4 rounded-xl bg-card border border-border"><app.icon size={36} className={app.accentColor} /></div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-3xl font-display font-bold">{app.name}</h3>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${app.statusBg} ${app.statusColor}`}>{app.status}</span>
                      </div>
                      <p className={`text-lg font-medium ${app.accentColor} mb-3`}>{app.tagline}</p>
                      <p className="text-muted-foreground text-base max-w-3xl">{app.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {app.features.map((feat) => (
                      <div key={feat.label} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                        <div className="p-2 rounded-md bg-primary/10 shrink-0"><feat.icon size={18} className="text-primary" /></div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{feat.label}</h4>
                          <p className="text-xs text-muted-foreground">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    {app.testLink ? (
                      <div className="flex flex-col gap-4">
                        <p className="text-sm text-muted-foreground italic">* Mobile access and GPS enabled for full experience.</p>
                        {/* FIX: Using <a> tag for external URL */}
                        <a 
                          href={app.testLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-[1.05] transition-all shadow-lg shadow-primary/25 w-fit cursor-pointer"
                        >
                          <Play size={18} fill="currentColor" />
                          Launch Live Prototype
                        </a>
                      </div>
                    ) : (
                      <div className="rounded-xl border border-border bg-card/80 p-8 text-center">
                        <h5 className="text-lg font-semibold mb-2">Internal Build Only</h5>
                        <p className="text-sm text-muted-foreground">Demo walkthrough coming soon.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    ))}
    <Footer />
  </div>
);

export default AppShowroom;