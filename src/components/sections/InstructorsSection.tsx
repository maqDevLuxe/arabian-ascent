import { motion } from "framer-motion";
import { Linkedin, GraduationCap } from "lucide-react";

const instructors = [
  {
    name: "Dr. Khalid Al-Rashidi",
    role: "Lead Instructor · Linguistics PhD",
    bio: "20+ years teaching Arabic to Fortune 500 executives. Former Saudi Aramco language consultant.",
    initials: "KR",
  },
  {
    name: "Sarah Al-Dosari",
    role: "Business Culture Specialist",
    bio: "Harvard MBA. Expert in cross-cultural business communication and Saudi corporate etiquette.",
    initials: "SD",
  },
  {
    name: "Omar Al-Qahtani",
    role: "Dialect & Phonetics Expert",
    bio: "Riyadh native. Certified ACTFL tester with specialization in Gulf Arabic phonology.",
    initials: "OQ",
  },
];

const InstructorsSection = () => (
  <section id="instructors" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">World-Class Faculty</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Executive <span className="text-gradient-gold">Instructors</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Learn from Saudi nationals and seasoned professionals with deep industry connections.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {instructors.map((inst, i) => (
          <motion.div
            key={inst.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="text-center bg-card rounded-2xl p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-premium"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-emerald mx-auto mb-6 flex items-center justify-center">
              <span className="font-heading font-bold text-2xl text-primary-foreground">{inst.initials}</span>
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-1">{inst.name}</h3>
            <p className="font-body text-sm text-accent mb-4">{inst.role}</p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">{inst.bio}</p>
            <div className="flex justify-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorsSection;
