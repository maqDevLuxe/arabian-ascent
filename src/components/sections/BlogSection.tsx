import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    tag: "Culture",
    title: "5 Saudi Business Customs Every Expat Must Know Before Their First Meeting",
    excerpt: "From the proper way to accept gahwa to understanding the subtle art of saying 'no' in Saudi Arabia...",
    date: "Mar 5, 2026",
    readTime: "6 min read",
  },
  {
    tag: "Language",
    title: "Why MSA Won't Help You in a Riyadh Boardroom: The Case for Saudi Dialect",
    excerpt: "Modern Standard Arabic opens doors, but the Saudi dialect builds relationships that close deals...",
    date: "Feb 28, 2026",
    readTime: "8 min read",
  },
  {
    tag: "Vision 2030",
    title: "How Vision 2030 is Creating Unprecedented Demand for Arabic-Speaking Professionals",
    excerpt: "With $3.3 trillion in planned projects, Saudi Arabia's transformation requires a new generation of linguists...",
    date: "Feb 20, 2026",
    readTime: "5 min read",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Insights</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Expat Business <span className="text-gradient-gold">Blog</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Expert insights on navigating the Saudi professional landscape.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-premium cursor-pointer"
          >
            <div className="h-48 bg-gradient-emerald flex items-center justify-center">
              <span className="text-6xl font-serif opacity-20" style={{ color: "hsl(var(--gold))" }}>مقال</span>
            </div>
            <div className="p-6">
              <span className="inline-block text-xs font-body font-medium tracking-wide px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">{post.tag}</span>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span className="font-body text-xs">{post.readTime}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
