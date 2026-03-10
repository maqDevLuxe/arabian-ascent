import { motion } from "framer-motion";
import { Monitor, MapPin, Check } from "lucide-react";

const options = [
  {
    icon: Monitor,
    title: "Remote Live Classes",
    features: ["Live Zoom sessions with Saudi instructors", "Flexible scheduling across time zones", "Recorded sessions for review", "Digital workbook & resources", "Weekly 1-on-1 coaching calls"],
    price: "$2,400",
    period: "/ 12-week program",
    popular: false,
  },
  {
    icon: MapPin,
    title: "In-Person Riyadh Immersion",
    features: ["On-site classes in Riyadh business district", "Real-world field practice sessions", "Corporate site visits & networking", "Cultural immersion activities", "Executive accommodation package"],
    price: "$8,900",
    period: "/ 12-week program",
    popular: true,
  },
];

const OptionsSection = () => (
  <section id="options" className="py-24 bg-gradient-sand">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Choose Your Path</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Remote vs <span className="text-gradient-gold">In-Person</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Two premium formats, one exceptional outcome.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {options.map((opt, i) => (
          <motion.div
            key={opt.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-premium ${
              opt.popular
                ? "bg-primary border-primary text-primary-foreground"
                : "bg-background border-border"
            }`}
          >
            {opt.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold rounded-full text-xs font-heading font-semibold text-foreground">
                Most Popular
              </div>
            )}
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${opt.popular ? "bg-primary-foreground/15" : "bg-gradient-emerald"}`}>
              <opt.icon className={`w-7 h-7 ${opt.popular ? "text-primary-foreground" : "text-primary-foreground"}`} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-6">{opt.title}</h3>
            <ul className="space-y-3 mb-8">
              {opt.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${opt.popular ? "text-gold-light" : "text-accent"}`} />
                  <span className={`font-body text-sm ${opt.popular ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{f}</span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-6" style={{ borderColor: opt.popular ? "hsl(0 0% 100% / 0.15)" : undefined }}>
              <span className="font-heading font-bold text-3xl">{opt.price}</span>
              <span className={`font-body text-sm ml-1 ${opt.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{opt.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OptionsSection;
