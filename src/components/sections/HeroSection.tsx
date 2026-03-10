import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-riyadh.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern Riyadh skyline at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      {/* Arabic calligraphy decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute right-10 top-1/4 text-[20rem] font-serif leading-none select-none pointer-events-none"
        style={{ color: "hsl(var(--gold))" }}
      >
        عربي
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-sm text-gold-light tracking-wide">Vision 2030 Aligned · Corporate Language Program</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
            style={{ color: "hsl(var(--primary-foreground))" }}
          >
            Master the
            <br />
            <span className="text-gradient-gold">Saudi Dialect</span>
            <br />
            for Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ color: "hsl(0 0% 100% / 0.75)" }}
          >
            The premier spoken Arabic course designed exclusively for executives & professionals
            operating in the Kingdom of Saudi Arabia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline-gold" size="lg" className="text-base px-8 py-6">
              <Play className="mr-2 w-5 h-5" /> Watch Preview
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-10 mt-14"
          >
            {[
              { value: "2,500+", label: "Professionals Trained" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "120+", label: "Corporate Partners" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-2xl md:text-3xl text-gradient-gold">{stat.value}</div>
                <div className="font-body text-xs md:text-sm" style={{ color: "hsl(0 0% 100% / 0.6)" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
