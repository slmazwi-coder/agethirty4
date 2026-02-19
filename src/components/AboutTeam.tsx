import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Someleze Lucky Mazwi", role: "Founder & Director", bio: "Civil engineer turned tech entrepreneur with 13+ years in South African infrastructure. Built bridges, bulk water systems, and urban rehab projects before bringing engineering rigor to AGE THIRTY4's digital platforms." },
  { name: "Naledi Khumalo", role: "CTO", bio: "Full-stack architect passionate about building scalable systems for real-world industries at AGE THIRTY4." },
  { name: "David Mokoena", role: "Head of Product", bio: "Product strategist bridging the gap between field operations and modern software at AGE THIRTY4." },
  { name: "Thandi Nkosi", role: "VP of Marketing", bio: "Brand builder focused on authentic storytelling and community-driven growth at AGE THIRTY4." },
];

const AboutTeam = () => (
  <section id="about" className="section-padding bg-secondary/20">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Our Team</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The people behind the code</h2>
        <p className="text-muted-foreground text-lg">
          A diverse team of builders, thinkers, and industry veterans committed to shipping software that matters.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg p-6 glass hover:glow-border transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center mb-4 text-2xl font-display font-bold text-primary">
              {member.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h3 className="font-display font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={16} /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutTeam;
