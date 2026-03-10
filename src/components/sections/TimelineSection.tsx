import { motion } from "framer-motion";

const milestones = [
  { week: "Week 1–2", title: "Foundation", desc: "Basic Saudi greetings, phonetics & cultural orientation", pct: 15 },
  { week: "Week 3–4", title: "Social Fluency", desc: "Casual conversation, small talk & social phrases", pct: 35 },
  { week: "Week 5–8", title: "Business Dialogue", desc: "Negotiations, meetings, and boardroom vocabulary", pct: 60 },
  { week: "Week 9–10", title: "Advanced Nuance", desc: "Humor, idioms, proverbs & regional variations", pct: 80 },
  { week: "Week 11–12", title: "Executive Mastery", desc: "Presentations, speeches & complex discussions", pct: 100 },
];

const TimelineSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Your Journey</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Fluency <span className="text-gradient-gold">Timeline</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg">12-week intensive path from zero to executive-level Saudi dialect proficiency.</p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-0 relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

        {milestones.map((m, i) => (
          <motion.div
            key={m.week}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative pl-16 md:pl-20 pb-10"
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-gradient-emerald border-4 border-background" />
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <span className="font-body text-xs tracking-[0.15em] uppercase text-accent">{m.week}</span>
                <h3 className="font-heading font-semibold text-xl text-foreground">{m.title}</h3>
                <p className="font-body text-muted-foreground text-sm mt-1">{m.desc}</p>
              </div>
              <div className="w-32 flex-shrink-0">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                    className="h-full bg-gradient-emerald rounded-full"
                  />
                </div>
                <span className="font-heading text-xs text-muted-foreground mt-1 block text-right">{m.pct}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
