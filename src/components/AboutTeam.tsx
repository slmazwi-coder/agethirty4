import { motion } from "framer-motion";
import { Linkedin, Twitter, Plus, Users } from "lucide-react";

const team = [
  { 
    name: "Someleze Lucky Mazwi", 
    role: "Founder & Managing Director", 
    bio: "Civil engineer turned tech entrepreneur. Bringing engineering rigor and a solution-driven identity to AGE THIRTY4's digital architecture.",
    image: "/assets/mazwi-corporate.jpg" 
  },
  { 
    name: "Sawo Mginqi", 
    role: "Partner & Head of Strategy", 
    bio: "Seasoned marketing strategist expert in digital growth and translating complex technical innovations into compelling market narratives.",
    image: "/assets/sawo-corporate.jpg" 
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: THE COMPANY SUMMARY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">About Age Thirty4</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
            Engineering Systems for <span className="text-primary">Automated Success.</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            <p>
              <strong className="text-foreground font-semibold">AGE THIRTY4</strong> was founded on a singular, passion-driven mission: to eliminate the friction of repetitive, low-yield actions through superior software engineering.
            </p>
            <p>
              We specialize in architecting high-efficiency systems for the <span className="text-foreground">E-commerce, Engineering, Construction, and Marketing</span> sectors. Our philosophy is rooted in my identity as a solution-driven founder—we believe that software should be a bridge, not a barrier.
            </p>
            <p>
              By developing applications that are intuitive to learn and lightning-fast to deploy, we empower forward-thinking professionals to reclaim their most valuable asset: <span className="text-primary font-medium">Time.</span>
            </p>
            <p className="text-base border-l-2 border-primary/30 pl-6 italic">
              At AGE THIRTY4, we don't just build code; we engineer systems that turn complex industry workflows into streamlined, automated success.
            </p>
          </div>
        </motion.div>

        {/* SECTION 2: THE TEAM (Founding Ownership) */}
        <div className="pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest">Founding Ownership</h3>
              <p className="text-sm text-muted-foreground mt-2">The leadership driving our solution-driven identity.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass border border-white/5 bg-gradient-to-br from-secondary/10 to-transparent flex flex-col"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border-2 border-primary/20">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
                </div>
              </motion.div>
            ))}

            {/* Expansion Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 border-2 border-dashed border-primary/20 bg-primary/5 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Plus size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Future Talents</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                We are scaling our engineering and marketing teams to meet growing demand.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest">
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