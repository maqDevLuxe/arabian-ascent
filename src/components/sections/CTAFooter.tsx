import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTAFooter = () => (
  <>
    {/* CTA */}
    <section className="py-24 bg-gradient-emerald relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif leading-none select-none pointer-events-none whitespace-nowrap"
        style={{ color: "hsl(var(--gold))" }}
      >
        ابدأ الآن
      </motion.div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span
            className="font-body text-sm tracking-[0.2em] uppercase mb-4 block"
            style={{ color: "hsl(var(--gold-light))" }}
          >
            Limited Seats Available
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6" style={{ color: "white" }}>
            Enroll in the Next
            <br />
            <span className="text-gradient-gold">Masterclass Cohort</span>
          </h2>
          <p className="font-body text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
            Next cohort starts April 15, 2026. Only 25 seats per cohort to ensure personalized attention.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gold" size="lg" className="text-base px-10 py-6">
              Reserve Your Seat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline-gold" size="lg" className="text-base px-10 py-6">
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-16 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-emerald flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">ع</span>
              </div>
              <span className="font-heading font-bold text-xl" style={{ color: "white" }}>ArabiaPro</span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
              The premier Saudi dialect program for global professionals. Vision 2030 aligned.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4" style={{ color: "hsl(var(--gold-light))" }}>Program</h4>
            <ul className="space-y-2">
              {["Saudi Dialect Course", "Business Culture", "Executive Coaching", "Corporate Training"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm hover:underline" style={{ color: "hsl(0 0% 100% / 0.5)" }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4" style={{ color: "hsl(var(--gold-light))" }}>Company</h4>
            <ul className="space-y-2">
              {["About Us", "Instructors", "Partners", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm hover:underline" style={{ color: "hsl(0 0% 100% / 0.5)" }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4" style={{ color: "hsl(var(--gold-light))" }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: "hsl(var(--gold))" }} />
                <span className="font-body text-sm" style={{ color: "hsl(0 0% 100% / 0.5)" }}>enroll@arabiapro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: "hsl(var(--gold))" }} />
                <span className="font-body text-sm" style={{ color: "hsl(0 0% 100% / 0.5)" }}>+966 11 xxx xxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "hsl(var(--gold))" }} />
                <span className="font-body text-sm" style={{ color: "hsl(0 0% 100% / 0.5)" }}>King Fahd Road, Riyadh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: "hsl(0 0% 100% / 0.1)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs" style={{ color: "hsl(0 0% 100% / 0.3)" }}>
              © 2026 ArabiaPro. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="font-body text-xs hover:underline" style={{ color: "hsl(0 0% 100% / 0.3)" }}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
