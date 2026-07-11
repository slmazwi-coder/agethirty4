import { motion } from "framer-motion";
import { Linkedin, Twitter, Plus, Users, Facebook, Instagram } from "lucide-react";

const team = [
  {
    name: "Someleze Lucky Mazwi",
    role: "Founder & Managing Director",
    bio: "Civil Engineering technician and project manager turned tech entrepreneur. Bringing engineering rigor and a solution-driven identity to AGE THIRTY4's digital architecture.",
    image: "/assets/someleze-corporate.jpg",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/someleze-mazwi-35596445", Icon: Linkedin },
      { name: "Facebook", url: "https://www.facebook.com/someleze.mazwi", Icon: Facebook },
      { name: "Tiktok", url: "https://www.tiktok.com/@someleze.boetsomi", Icon: Twitter },
    ]
  },
  {
    name: "Sawo Mginqi",
    role: "Partner & Head of Strategy",
    bio: "Seasoned marketing strategist expert in digital growth and translating complex technical innovations into compelling market narratives.",
    image: "/assets/sawo-corporate.jpg",
    socials: [
      { name: "LinkedIn", url: "#", Icon: Linkedin },
      { name: "Facebook", url: "https://www.facebook.com/share/1DioK1oFhb/?mibextid=wwXIfr", Icon: Facebook },
      { name: "Tiktok", url: "https://www.tiktok.com/@colourful_saved_makoti?_r=1&_t=ZS-", Icon: Twitter },
      { name: "Instagram", url: "https://www.instagram.com/colourful_saved_being?igsh=MXU1c3VudHZ6aWZjYw%3D%3D&utm_source=qr", Icon: Instagram }
    ]
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* SECTION 1: THE COMPANY SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-eyebrow">About Age Thirty4</span>
          <h2 className="section-title">
            Engineering Systems for{" "}
            <span className="text-gradient">Automated Success</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="rounded-3xl p-8 md:p-12 glass glow-border space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            <p className="text-foreground">
              <strong className="font-semibold">AGE THIRTY4</strong> was founded on a singular, passion-driven mission: to eliminate the friction of repetitive, low-yield actions through superior software engineering.
            </p>
            <p>
              We specialize in architecting high-efficiency systems for the <span className="text-foreground">E-commerce, Engineering, Construction, and Marketing</span> sectors. Our philosophy is rooted in my identity as a solution-driven founder — we believe that software should be a bridge, not a barrier.
            </p>
            <p>
              By developing applications that are intuitive to learn and lightning-fast to deploy, we empower forward-thinking professionals to reclaim their most valuable asset: <span className="text-primary font-medium">Time.</span>
            </p>
            <p className="text-base border-l-2 border-primary pl-6 italic text-foreground/80">
              At AGE THIRTY4, we don't just build code; we engineer systems that turn complex industry workflows into streamlined, automated success.
            </p>
          </div>
        </motion.div>

        {/* SECTION 2: THE TEAM (Founding Ownership) */}
        <div className="pt-20 border-t border-border/30">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-eyebrow">Founding Ownership</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">The Leadership</h3>
            <p className="text-muted-foreground">The people driving our solution-driven identity.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name}&background=111&color=fff&size=200`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1 text-foreground">{member.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex gap-4">
                    {member.socials.map(social => (
                      <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                        <social.Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 border-2 border-dashed border-primary/30 bg-card/50 flex flex-col items-center justify-center text-center group hover:bg-primary/5 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Plus size={26} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Future Talents</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We are scaling our engineering and marketing teams to meet growing demand.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest">
                <Users size={12} />
                Crowdfunding in Progress
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
