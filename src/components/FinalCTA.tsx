import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ctaBg from "@/assets/cta-background.jpg";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt="Cozy knitted blankets with warm candlelight"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-light text-cream mb-6">
            Bring Warmth Home
          </h2>
          <p className="text-cream/70 text-lg max-w-md mx-auto mb-10">
            Discover pieces that carry stories, warmth, and the gentle touch of human hands.
          </p>
          <Link
            to="/collection"
            className="inline-block px-12 py-4 bg-cream text-warm-black text-sm tracking-luxury uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Shop the Saras Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
