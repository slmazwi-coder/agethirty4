import { motion } from "framer-motion";
import { Clock, Zap, Hammer, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* The Founder's Vision / Summary */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Identity</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Engineered for <span className="text-primary text-glow">Efficiency.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with a passion for **solution-driven identity**, AGE THIRTY4 was born to solve a specific problem: the waste of human potential on repetitive, low-result tasks.
              </p>
              <p>
                We bridge the gap between **Engineering, Construction, E-commerce, and Marketing** by developing software that is quick to learn and impossible to outgrow. We build for the forward-thinking leader who values time above all else.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col gap-2">
                <Clock className="text-primary" size={28} />
                <h4 className="font-bold">Time Saving</h4>
                <p className="text-xs text-muted-foreground text-balance">Eliminating repetitive actions that yield zero results.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Zap className="text-primary" size={28} />
                <h4 className="font-bold">Quick Learning</h4>
                <p className="text-xs text-muted-foreground text-balance">Software designed to be used instantly, not studied for weeks.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
               <div className="h-48 glass rounded-3xl flex items-center justify-center border border-primary/20">
                  <Hammer size={40} className="text-primary/40" />
               </div>
               <div className="h-64 glass rounded-3xl bg-primary/10 flex flex-col items-center justify-center p-6 text-center border border-primary/30">
                  <span className="text-4xl font-bold text-primary">13+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest mt-2">Years of Rigor</span>
               </div>
            </div>
            <div className="space-y-4 pt-12">
               <div className="h-64 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/5">
                  <TrendingUp size={40} className="text-primary/40 mb-4" />
                  <span className="text-xs font-medium text-muted-foreground">Focused on High-Yield Results</span>
               </div>
               <div className="h-48 glass rounded-3xl border border-white/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;