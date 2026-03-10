import { motion } from "framer-motion";

const partners = [
  "Saudi Aramco", "SABIC", "STC", "NEOM", "Saudi Airlines",
  "Al Rajhi Bank", "Ma'aden", "ACWA Power", "Red Sea Global", "Lucid Motors KSA"
];

const PartnersSection = () => (
  <section className="py-20 bg-gradient-sand">
    <div className="container mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-12"
      >
        Trusted by Leading Corporations in the Kingdom
      </motion.p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="font-heading font-semibold text-lg md:text-xl text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-default"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
