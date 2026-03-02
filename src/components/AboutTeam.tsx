import { motion } from "framer-motion";
import { Linkedin, Twitter, Users, Plus, Shield } from "lucide-react";

const team = [
  { 
    name: "Someleze Lucky Mazwi", 
    role: "Founder & Managing Director", 
    bio: "A Civil Engineer with 13+ years of experience in South African infrastructure. Someleze brings the structural rigor of bridge-building and bulk water systems to the digital architecture of Age Thirty 4.",
    image: "/assets/mazwi-corporate.jpg" 
  },
  { 
    name: "Sawo Mginqi", 
    role: "Partner & Head of Strategy", 
    bio: "A seasoned marketing strategist specializing in digital growth and brand positioning. Sawo translates complex technical innovations into compelling market narratives, spearheading the expansion of the Thirty4 Studio ecosystem.",
    image: "/assets/sawo-corporate.jpg" 
  },
];

const AboutTeam = () => (
  <section id="about" className="section-padding bg-secondary/20">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="max-w-2xl mb-16"
      >
        <div className="flex items-center gap-2 mb-3">
          <Shield size={16} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block">Founding Ownership</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Leadership</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Age Thirty 4 is built on a foundation of engineering integrity and strategic growth. Meet the visionaries driving the digital transformation of Sub-Saharan infrastructure.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg p-8 glass hover:glow-border transition-all duration-300 group flex flex-col"
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border-2 border-primary/20 group-hover:border-primary transition-all duration-500">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <h3 className="font-display font-semibold text-xl mb-1">{member.name}</h3>
            <p className="text-sm text-primary font-bold uppercase tracking-widest mb-4">{member.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
            <div className="flex gap-4 mt-auto">
              <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
            </div>
          </motion.div>
        ))}

        {/* The "Expansion" Card for Investors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-lg p-8 border-2 border-dashed border-primary/20 bg-primary/5 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
            <Plus size={32} />
          </div>
          <h3 className="font-display font-semibold text-xl mb-2 text-foreground">Future Talents</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            "We are currently in a strategic expansion phase. Crowdfunding capital will be deployed to onboard world-class full-stack architects and product specialists."
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest">
            <Users size={12} />
            Scaling in Progress
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutTeam;