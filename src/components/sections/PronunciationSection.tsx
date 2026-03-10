import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Play, Pause } from "lucide-react";

const phrases = [
  { arabic: "كيف حالك؟", transliteration: "Kaif ḥālak?", english: "How are you?", context: "Formal greeting" },
  { arabic: "الحمد لله", transliteration: "Al-ḥamdulillāh", english: "Praise be to God / I'm well", context: "Standard response" },
  { arabic: "إن شاء الله", transliteration: "In shā' Allāh", english: "God willing", context: "Future plans" },
  { arabic: "يعطيك العافية", transliteration: "Ya'ṭīk al-'āfiyah", english: "May God give you strength", context: "Appreciation" },
  { arabic: "ما شاء الله", transliteration: "Mā shā' Allāh", english: "What God has willed", context: "Admiration" },
  { arabic: "تفضل", transliteration: "Tafaḍḍal", english: "Please / Go ahead", context: "Hospitality" },
];

const PronunciationSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-sand relative calligraphy-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Interactive Learning</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Pronunciation <span className="text-gradient-emerald">Studio</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Practice essential Saudi expressions with our interactive audio interface.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {phrases.map((p, i) => (
            <motion.div
              key={p.arabic}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className={`group cursor-pointer rounded-xl p-6 border transition-all duration-300 ${
                activeIdx === i
                  ? "bg-primary border-primary shadow-premium"
                  : "bg-background border-border hover:border-accent/40 hover:shadow-premium"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-3xl font-serif ${activeIdx === i ? "text-primary-foreground" : "text-foreground"}`}
                  dir="rtl"
                >
                  {p.arabic}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeIdx === i
                      ? "bg-primary-foreground/20"
                      : "bg-muted group-hover:bg-accent/20"
                  }`}
                >
                  {activeIdx === i ? (
                    <Pause className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Volume2 className={`w-4 h-4 ${activeIdx === i ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  )}
                </div>
              </div>
              <p className={`font-body text-sm font-medium mb-1 ${activeIdx === i ? "text-primary-foreground/90" : "text-foreground"}`}>
                {p.transliteration}
              </p>
              <p className={`font-body text-sm mb-2 ${activeIdx === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {p.english}
              </p>
              <span
                className={`inline-block text-xs font-body px-2 py-1 rounded-full ${
                  activeIdx === i
                    ? "bg-primary-foreground/15 text-primary-foreground/80"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {p.context}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PronunciationSection;
