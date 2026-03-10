import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2500, suffix: "+", label: "Professionals Trained" },
  { value: 120, suffix: "+", label: "Corporate Partners" },
  { value: 15, suffix: "", label: "Countries Represented" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-heading font-bold text-5xl md:text-6xl text-gradient-gold">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const CountersSection = () => (
  <section className="py-24 bg-gradient-emerald relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.05 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="absolute right-0 top-0 text-[18rem] font-serif leading-none select-none pointer-events-none"
      style={{ color: "hsl(var(--gold))" }}
    >
      نجاح
    </motion.div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="font-body text-sm mt-2" style={{ color: "hsl(0 0% 100% / 0.7)" }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CountersSection;
