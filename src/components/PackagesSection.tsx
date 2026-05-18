import { useState } from "react";

type Package = {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  price: string;
  monthly: string;
  description: string;
  color: string;
  accent: string;
  features: string[];
  gain: string;
  note: string;
  popular?: boolean;
  category: "school" | "commercial";
};

const packages: Package[] = [
  {
    id: "school-t1",
    badge: "Education",
    name: "A34 School",
    tagline: "The Foundation",
    price: "R5,750",
    monthly: "R200/mo",
    description: "A professional digital identity built specifically for schools — launch with confidence and serve your community online.",
    color: "from-amber-500/20 to-yellow-600/10",
    accent: "#F59E0B",
    category: "school",
    features: [
      "6 curated pages (Home, About, Academics, etc.)",
      ".co.za domain included",
      "24/7 FAQ bot for instant answers",
      "School email included",
      "WhatsApp link & basic chatbot",
      "Online admissions",
      "Admin Portal for easy updates managed by you",
      "Student Portal for report downloads for students",
      "Local SEO setup for regional visibility",
    ],
    gain: "Immediate credibility and a fast launch path for your school.",
    note: "Perfect for primary, secondary and tertiary institutions.",
  },
  {
    id: "school-t2",
    badge: "Education+",
    name: "A34 School Pro",
    tagline: "The Powerhouse",
    price: "R9,470",
    monthly: "R350/mo",
    description: "Everything in A34 School plus a full e-commerce platform — sell uniforms, books, and supplies directly through your school website.",
    color: "from-amber-600/20 to-yellow-700/10",
    accent: "#D97706",
    popular: true,
    category: "school",
    features: [
      "All A34 School features included",
      "Complete e-commerce platform with payment integration",
      "Online store for uniforms, books & supplies",
      "8+ tailored pages",
      "Up to 10 school email addresses",
      "Multilingual AI chatbot",
      "Invoice generator for EFT payments",
      "National SEO strategy",
      "3 months premium monitoring",
    ],
    gain: "A complete digital school ecosystem with built-in commerce.",
    note: "Ideal for schools ready to sell online and serve parents digitally.",
  },
  {
    id: "corp-t1",
    category: "commercial" as const,
    badge: "Business",
    name: "A34 Corp T1",
    tagline: "The Foundation",
    price: "R3,650",
    monthly: "R350/mo",
    description: "Professional identity to launch with confidence. Perfect for new ventures and small practices.",
    color: "from-zinc-500/20 to-zinc-700/10",
    accent: "#A1A1AA",
    features: [
      "6 curated pages (Home, About, Services, etc.)",
      ".co.za domain included",
      "24/7 FAQ bot for instant customer answers",
      "Business email included",
      "WhatsApp link & basic chatbot",
      "Online client application form",
      "Local SEO setup for regional visibility",
    ],
    gain: "Immediate credibility, a polished identity, a fast launch path.",
    note: "Basic lead capture automation included.",
  },
  {
    id: "corp-t2",
    category: "commercial" as const,
    badge: "Growth",
    name: "A34 Corp T2",
    tagline: "The Connector",
    price: "R5,750",
    monthly: "R450/mo",
    description: "A growth-oriented site that connects you to local customers and manages leads intelligently.",
    color: "from-orange-500/20 to-orange-700/10",
    accent: "#F97316",
    popular: true,
    features: [
      "All T1 benefits",
      "8 tailored pages",
      "Multilingual AI Lead-Gen Bot",
      "Up to 10 business emails",
      "Invoice generator for EFT payments",
      "Local SEO domination strategy",
      "3 months premium monitoring",
    ],
    gain: "A digital secretary that qualifies and nurtures leads.",
    note: "Voice interface not included — focused on text & multilingual chat.",
  },
  {
    id: "corp-t3",
    category: "commercial" as const,
    badge: "Enterprise",
    name: "A34 Corp T3",
    tagline: "The Empire",
    price: "R14,250",
    monthly: "R600/mo",
    description: "Full-stack solution for businesses ready to dominate their market — commerce, conversion, and conversation integrated.",
    color: "from-yellow-500/20 to-amber-600/10",
    accent: "#EAB308",
    features: [
      "Complete e-commerce platform with payment integration",
      "National SEO strategy to capture broader markets",
      "Talking AI Assistant — voice-enabled interactions",
      "Custom pages & full e-commerce",
      "Priority performance optimisation",
      "Dedicated support channel",
      "100 voice mins/month included (R1.80/extra min)",
    ],
    gain: "Market dominance through commerce and conversational tech.",
    note: "Priority onboarding, 3 months premium monitoring included.",
  },
];

const PackagesSection = () => {
  const [activeTab, setActiveTab] = useState<"school" | "commercial">("school");

  const filtered = packages.filter((p) => p.category === activeTab);

  return (
    <section id="packages" className="py-24 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary/70 mb-4">
            Website Development & Hosting
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Packages Built for{" "}
            <span className="text-gradient">South African Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Professional website development and hosting for businesses across Durban, Mthatha, East London,
            Pietermaritzburg, Newcastle, Richards Bay, Kokstad, Matatiele, Umzimkulu, Butterworth and Queenstown.
          </p>

        </div>

        {/* Sub-tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {(["school", "commercial"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {tab === "school" ? "🎓 School Packages" : "🏢 Commercial Packages"}
            </button>
          ))}
        </div>

        {/* Package cards */}
        <div className={`grid grid-cols-1 gap-6 ${
          filtered.length <= 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-2 xl:grid-cols-3"
        }`}>
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border ${
                pkg.popular ? "border-primary/60" : "border-border"
              } bg-gradient-to-b ${pkg.color} backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
                  Most Popular
                </div>
              )}

              {/* Badge + name */}
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${pkg.accent}22`, color: pkg.accent }}
                >
                  {pkg.badge}
                </span>
                <h3 className="text-xl font-display font-bold mt-3 tracking-tight">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{pkg.tagline}</p>
              </div>

              {/* Price */}
              <div className="border-t border-border/50 pt-4">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold font-display" style={{ color: pkg.accent }}>
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted-foreground mb-1">launch</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{pkg.monthly} hosting & updates</p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: pkg.accent }} className="mt-0.5 shrink-0">✓</span>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Gain */}
              <div className="border-t border-border/50 pt-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">What you gain: </span>
                {pkg.gain}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/27616122586?text=Hi AGE THIRTY4, I'm interested in the ${pkg.name} package`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ background: pkg.accent, color: "#000" }}
              >
                Get Started on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
          All packages include priority onboarding, 3 months of premium monitoring, and a dedicated support channel.
          Payment plans available for approved applicants.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
