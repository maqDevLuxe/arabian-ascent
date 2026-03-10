import { motion } from "framer-motion";
import { MessageCircle, Building2, Handshake, Phone } from "lucide-react";

const cards = [
  {
    icon: MessageCircle,
    title: "Daily Conversational Saudi",
    desc: "Master everyday Saudi expressions, greetings, and colloquialisms used in business settings across the Kingdom.",
  },
  {
    icon: Building2,
    title: "Boardroom Arabic",
    desc: "Learn formal Saudi dialect for negotiations, presentations, and high-level corporate communications.",
  },
  {
    icon: Handshake,
    title: "Relationship Building",
    desc: "Understand the cultural nuances of 'wasta' and relationship-driven business in Saudi Arabia.",
  },
  {
    icon: Phone,
    title: "Phone & Email Etiquette",
    desc: "Professional Saudi dialect for calls, WhatsApp business communication, and formal correspondence.",
  },
];

const DialectSection = () => (
  <section id="dialect" className="py-24 bg-background relative calligraphy-bg">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Curriculum Focus</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Saudi Dialect <span className="text-gradient-gold">Mastery</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          A specialized curriculum designed around the unique characteristics of the Saudi Arabian dialect.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-premium"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-emerald flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <card.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{card.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DialectSection;
