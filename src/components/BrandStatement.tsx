import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import knittingTexture from "@/assets/knitting-texture.jpg";

const BrandStatement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm tracking-luxury uppercase text-accent mb-6">Our Philosophy</p>
            <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground leading-tight mb-8">
              Every thread holds patience.{" "}
              <span className="italic">Every stitch holds intention.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In a world that rushes, we choose to slow down. Each piece in our collection is
              hand-knitted by skilled artisans who pour hours of care into every single stitch.
              No machines. No shortcuts. Just hands, yarn, and love.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our yarn is ethically sourced from family-owned farms, dyed with natural pigments,
              and crafted into pieces that carry warmth far beyond their fibers.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src={knittingTexture}
                alt="Close-up of artisan hands knitting cream wool yarn"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-lg max-w-[240px]">
              <p className="font-heading text-3xl font-semibold text-foreground">12+</p>
              <p className="text-sm text-muted-foreground mt-1">hours of love in every piece</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
