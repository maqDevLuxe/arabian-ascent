import { motion } from "framer-motion";
import { Coffee, Users, Clock, Heart } from "lucide-react";

const items = [
  {
    icon: Coffee,
    title: "Gahwa Protocol",
    desc: "Master the traditional coffee ceremony etiquette — a cornerstone of Saudi business hospitality.",
  },
  {
    icon: Users,
    title: "Majlis Etiquette",
    desc: "Navigate formal and informal gathering protocols with grace and cultural sensitivity.",
  },
  {
    icon: Clock,
    title: "Time & Patience",
    desc: "Understand the Saudi approach to pace, relationship-building, and decision timelines.",
  },
  {
    icon: Heart,
    title: "Values & Traditions",
    desc: "Respect for Islamic customs, national pride, and Vision 2030 ambitions in professional settings.",
  },
];

const CultureSection = () => (
  <section id="culture" className="py-24 bg-gradient-sand relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.03 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="absolute left-0 top-0 text-[15rem] font-serif leading-none select-none pointer-events-none"
      style={{ color: "hsl(var(--primary))" }}
    >
      ثقافة
    </motion.div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Beyond Language</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Business Etiquette & <span className="text-gradient-emerald">Culture</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Language is only half the equation. Our program integrates deep cultural intelligence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="flex gap-5 p-6 bg-background rounded-xl border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-premium"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CultureSection;
