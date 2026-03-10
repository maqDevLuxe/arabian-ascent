import { motion } from "framer-motion";
import networkingImage from "@/assets/networking-event.jpg";

const NetworkingSection = () => (
  <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
    <img src={networkingImage} alt="Premium networking event in Saudi Arabia" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-gold-light mb-3 block">Exclusive Access</span>
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4" style={{ color: "white" }}>
          Premium Networking Events
        </h2>
        <p className="font-body text-lg" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
          Connect with fellow professionals, Saudi business leaders, and industry pioneers at our exclusive quarterly events across Riyadh, Jeddah, and NEOM.
        </p>
      </motion.div>
    </div>
  </section>
);

export default NetworkingSection;
