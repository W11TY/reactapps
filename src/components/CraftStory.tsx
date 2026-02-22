import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Sourcing the Yarn",
    description: "We hand-select ethically sourced wool from family farms, choosing fibers that feel as good as they look.",
  },
  {
    number: "02",
    title: "Natural Dyeing",
    description: "Each skein is dyed using plant-based pigments — turmeric golds, indigo blues, walnut browns — colors born from nature.",
  },
  {
    number: "03",
    title: "Hand Knitting",
    description: "Our artisans knit every piece by hand, stitch by stitch. A single sweater can take over 20 hours of focused craft.",
  },
  {
    number: "04",
    title: "Quality & Love",
    description: "Every finished piece is inspected, softened, and prepared with care — ready to bring warmth to its new home.",
  },
];

const CraftStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-luxury uppercase text-accent mb-4">The Journey</p>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground">
            Not Manufactured.{" "}
            <span className="italic">Carefully Made.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-8 lg:gap-12 items-start mb-16 last:mb-0"
            >
              <div className="flex-shrink-0">
                <span className="font-heading text-5xl lg:text-6xl font-light text-accent/40">
                  {step.number}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="w-px h-12 bg-border ml-0 mt-8" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftStory;
