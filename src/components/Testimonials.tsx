import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "I've never felt anything so soft. It's like wearing a warm hug. I can feel the love in every stitch.",
    author: "Priya M.",
    location: "Mumbai",
    product: "Cable Knit Scarf",
  },
  {
    quote: "This cardigan is extraordinary. My grandmother used to knit, and this brought back those feelings of warmth and care.",
    author: "Sarah L.",
    location: "London",
    product: "Aran Cable Cardigan",
  },
  {
    quote: "Worth every penny and every day of waiting. The craftsmanship is visible in every detail. A true treasure.",
    author: "Ananya R.",
    location: "Bengaluru",
    product: "Chunky Throw Blanket",
  },
  {
    quote: "I bought these as a gift, and my partner was moved to tears. That's the power of something truly handmade.",
    author: "James K.",
    location: "New York",
    product: "Nordic Pattern Mittens",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-luxury uppercase text-accent mb-4">Kind Words</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-light text-foreground">
            Loved by Those Who Wear Them
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-10 lg:p-14 text-center"
            >
              <span className="font-heading text-6xl text-accent/30 leading-none block mb-4">"</span>
              <p className="font-heading text-xl lg:text-2xl text-foreground leading-relaxed italic mb-8">
                {testimonials[current].quote}
              </p>
              <div>
                <p className="font-body text-sm font-medium text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonials[current].location} · {testimonials[current].product}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 border border-border hover:border-foreground text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-accent w-6" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 border border-border hover:border-foreground text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
