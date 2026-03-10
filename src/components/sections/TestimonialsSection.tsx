import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This program transformed my ability to connect with Saudi partners. Within weeks, I was navigating business conversations with confidence. It's been career-changing.",
    name: "James Mitchell",
    title: "VP of Operations, Bechtel KSA",
    initials: "JM",
  },
  {
    quote: "As a CEO relocating to Riyadh, understanding the Saudi dialect was crucial. ArabiaPro didn't just teach me language — they taught me the culture behind every word.",
    name: "Lisa Fernandez",
    title: "CEO, Meridian Consulting Group",
    initials: "LF",
  },
  {
    quote: "The instructors are world-class. Their deep understanding of Saudi business culture gave me an edge that no MBA program could have provided.",
    name: "David Chen",
    title: "Managing Director, McKinsey Riyadh",
    initials: "DC",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-background relative calligraphy-bg">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Success Stories</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          What Our <span className="text-gradient-gold">Graduates</span> Say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-premium"
          >
            <Quote className="w-8 h-8 text-accent/30 mb-4" />
            <p className="font-body text-foreground/80 text-sm leading-relaxed mb-8 italic">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-foreground">{t.initials}</span>
              </div>
              <div>
                <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                <div className="font-body text-xs text-muted-foreground">{t.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
