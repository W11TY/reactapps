import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/main.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Handknitted cream sweater on a warm wooden chair with soft sunlight"
          className="w-full h-full object-cover animate-soft-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-wide-luxury uppercase text-cream/80 mb-6 font-body"
        >
          SARAS 
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6"
        >
          SARAS <br />
          <span className="italic font-light">KnitWear</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 font-body"
        >
        designed to bring comfort, softness, and timeless warmth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/collection"
            className="inline-block px-10 py-4 bg-cream text-warm-black text-sm tracking-luxury uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Explore Collection
          </Link>
          <Link
            to="/story"
            className="inline-block px-10 py-4 border border-cream/40 text-cream text-sm tracking-luxury uppercase font-medium hover:bg-cream/10 transition-all duration-300"
          >
            View Craft Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-cream/30 relative overflow-hidden">
          <motion.div
            className="w-full h-6 bg-cream/60"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
