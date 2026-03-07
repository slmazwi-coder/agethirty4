import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Shield,
  BarChart3,
  ArrowLeft,
  Store,
  Eye,
  Users,
  CheckCircle2,
  Layers,
  Clock,
  GanttChart,
  FileCheck,
  HardHat,
  Package,
  Search,
  BadgeCheck,
  Sparkles,
  Play,
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
    tagline: "Shop Every Store in Your Nearest Mall — With One Voice Command",
    status: "In Development",
    statusColor: "text-amber-400",
    statusBg: "bg-amber-400/10",
    description:
      "Moreki is South Africa\'s first integrated virtual mall app. It brings your entire nearest mall into one app — browse real stores, compare prices, build voice-powered shopping lists, and check out once across multiple vendors. Whether you collect from a mall hub or get it delivered, Moreki turns fragmented, time-consuming shopping into a seamless experience for families, professionals, and retailers alike.",
    icon: Store,
    features: [
      { icon: Eye, label: "Location-aware mall browsing", desc: "Register once, select your nearest mall, and see its full directory of stores with live stock data" },
      { icon: Sparkles, label: "Voice-powered shopping lists", desc: "Simply say \'Milk, two loaves, dog food\' and Moreki builds your complete shopping list automatically" },
      { icon: Search, label: "Smart price comparisons", desc: "Your preferred store appears first, plus cheaper alternatives and substitutes when items are out of stock" },
      { icon: Package, label: "Unified checkout & hub collection", desc: "Pay once in-app — Moreki settles with each store individually. Collect from mall hubs or get doorstep delivery" },
      { icon: BadgeCheck, label: "Integrated rewards & loyalty", desc: "Upload your existing loyalty cards (Pick n Pay, Spar, etc.) and earn points seamlessly across all stores" },
      { icon: Clock, label: "Recurring orders", desc: "Set up monthly groceries for yourself or a loved one in another province — Moreki reminds and fulfils automatically" },
    ],
    useCases: [
      "Busy families and professionals who don\'t have time to walk store-to-store hunting for deals",
      "People sending groceries to loved ones in another province — no more complicated coordination",
      "Small retailers who want digital visibility without building their own e-commerce site",
      "Mall operators looking to drive foot traffic and integrate digital shopping into their spaces",
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
    description:
      "Brandified helps businesses verify suppliers before committing to deals. Upload documents, check compliance, and build trust with verified badges — reducing fraud and streamlining procurement across industries.",
    icon: Shield,
    features: [
      { icon: Search, label: "Supplier discovery", desc: "Find verified suppliers across industries and regions" },
      { icon: BadgeCheck, label: "Verification badges", desc: "Trusted status indicators backed by document verification" },
      { icon: FileCheck, label: "Document validation", desc: "Upload and verify tax clearance, B-BBEE, CIDB, and more" },
      { icon: Layers, label: "Compliance dashboard", desc: "Track supplier compliance status at a glance" },
    ],
    useCases: [
      "Procurement teams vetting new suppliers",
      "Contractors needing CIDB-graded subcontractors",
      "Government departments requiring B-BBEE compliance",
    ],
    gradient: "from-sky-500/20 to-blue-500/20",
    accentColor: "text-sky-400",
  },
  {
    id: "projectflow",
    category: "construction",
    name: "ProjectFlow AI",
    tagline: "Construction Project Management, Reinvented",
    status: "In Development",
    statusColor: "text-emerald-400",
    statusBg: "bg-emerald-400/10",
    description:
      "ProjectFlow AI brings engineering-grade project management to construction teams. With interactive Gantt charts, resource tracking, and AI-assisted scheduling, it turns chaotic site workflows into streamlined operations.",
    icon: BarChart3,
    features: [
      { icon: GanttChart, label: "Interactive Gantt charts", desc: "Plan, adjust, and track tasks with drag-and-drop timelines" },
      { icon: HardHat, label: "Site-ready dashboards", desc: "Designed for construction crews — clear, actionable, mobile-friendly" },
      { icon: Clock, label: "AI schedule optimisation", desc: "Smart suggestions to avoid delays and resource conflicts" },
      { icon: CheckCircle2, label: "Milestone tracking", desc: "Track progress against budgets, deadlines, and deliverables" },
    ],
    useCases: [
      "Civil engineering teams managing multi-phase infrastructure projects",
      "Construction firms coordinating subcontractors and timelines",
      "Project managers who need real-time progress visibility",
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AppShowroom = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
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
            Every app we build at AGE THIRTY4 solves a specific problem — from visual e-commerce to construction project management. Explore how each one can make your life easier.
          </p>
        </motion.div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 mt-10">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:glow-border transition-all text-sm font-medium text-foreground"
            >
              <cat.icon size={16} className="text-primary" />
              {cat.label}
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* App sections */}
    {categories.map((cat) => (
      <section key={cat.id} id={cat.id} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-md bg-primary/10">
              <cat.icon size={22} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold">{cat.label}</h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {apps
              .filter((a) => a.category === cat.id)
              .map((app, idx) => (
                <motion.div key={app.id} variants={item}>
                  <div
                    className={`rounded-2xl p-8 md:p-12 glass glow-border bg-gradient-to-br ${app.gradient}`}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <app.icon size={36} className={app.accentColor} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-3xl md:text-4xl font-display font-bold">
                            {app.name}
                          </h3>
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${app.statusBg} ${app.statusColor}`}
                          >
                            {app.status}
                          </span>
                        </div>
                        <p className={`text-lg font-medium ${app.accentColor} mb-3`}>
                          {app.tagline}
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                          {app.description}
                        </p>
                      </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {app.features.map((feat) => (
                        <div
                          key={feat.label}
                          className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
                        >
                          <div className="p-2 rounded-md bg-primary/10 shrink-0">
                            <feat.icon size={18} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">{feat.label}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Use cases */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Who is it for?
                      </h4>
                      <ul className="space-y-2">
                        {app.useCases.map((uc) => (
                          <li
                            key={uc}
                            className="flex items-start gap-3 text-sm text-foreground/80"
                          >
                            <CheckCircle2
                              size={16}
                              className={`${app.accentColor} mt-0.5 shrink-0`}
                            />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Video demo */}
                    <div className="mt-10">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        See {app.name} in Action
                      </h4>
                      {app.id === 'moreki' ? (
                        <a
                          href="https://studio--studio-7917528504-89a87.us-central1.hosted.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                        >
                          <Play size={16} />
                          Start Testing
                        </a>
                      ) : (
                        <div className="relative rounded-xl overflow-hidden border border-border bg-card/80 aspect-video flex items-center justify-center">
                          <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient}`} />
                          <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
                            <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                              <Play size={32} className="text-primary ml-1" />
                            </div>
                            <h5 className="text-lg font-display font-semibold">
                              App Demo Coming Soon
                            </h5>
                            <p className="text-sm text-muted-foreground max-w-md">
                              Watch a full walkthrough of {app.name} — see how it works from start to finish.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}\
          </motion.div>
        </div>
      </section>
    ))}\

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >\
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Interested in early access?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            All our apps are currently in development. Get notified when they launch or reach out for a private demo.
          </p>
          <Link
            to="/#support"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AppShowroom;
