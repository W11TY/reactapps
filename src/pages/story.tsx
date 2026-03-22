import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const values = [
  {
    number: "01",
    title: "Slow Over Fast",
    description: "We reject the rush of mass production. Every SARAS piece takes hours — sometimes days — of quiet, intentional handwork. Slowness is not a limitation; it's our philosophy.",
  },
  {
    number: "02",
    title: "Hands Over Machines",
    description: "Our artisans don't operate machines. They work with needles, patience, and decades of inherited skill. The slight imperfections in each piece are signatures of human touch.",
  },
  {
    number: "03",
    title: "Nature Over Synthetic",
    description: "From ethically sourced merino wool to plant-based dyes — we choose materials that honor the earth. Our palette comes from turmeric, indigo, walnut, and other gifts of nature.",
  },
  {
    number: "04",
    title: "Warmth Over Trend",
    description: "We don't chase seasonal trends. We create timeless pieces designed to be worn, loved, and passed on. SARAS knitwear is made to outlast fashion cycles.",
  },
];

const milestones = [
  { year: "2019", event: "SARAS was born from a small studio with two artisans and a vision for meaningful knitwear." },
  { year: "2020", event: "Partnered with family farms for ethically sourced wool, building relationships rooted in trust." },
  { year: "2021", event: "Launched our first full collection — 12 pieces, each taking over 15 hours to create." },
  { year: "2022", event: "Expanded our artisan community to 8 skilled knitters, preserving traditional techniques." },
  { year: "2023", event: "Introduced plant-based dyeing, bringing colors born from turmeric, indigo, and walnut." },
  { year: "2024", event: "Welcomed customers across 12 countries, proving that handmade warmth knows no borders." },
];

const OurStoryPage = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Our Story</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm tracking-luxury uppercase text-accent mb-4">The SARAS Story</p>
            <h1 className="font-heading text-4xl lg:text-5xl xl:text-7xl font-light text-foreground leading-tight mb-6">
              Born from Warmth,{" "}
              <span className="italic">Crafted with Intention</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl">
              SARAS began with a simple belief: that the things we wear should carry meaning.
              That warmth isn't just physical — it's the care woven into every thread.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm tracking-luxury uppercase text-accent mb-6">Where It Began</p>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-light text-foreground leading-tight mb-8">
                A small studio. Two pairs of hands.{" "}
                <span className="italic">One patient dream.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  SARAS was founded in 2019 in a sunlit studio that smelled of wool and chamomile tea.
                  It started with a founder who believed that knitwear should feel like a warm embrace —
                  not a mass-produced commodity.
                </p>
                <p>
                  The name "SARAS" means essence — the core of something beautiful and pure. It reflects
                  our commitment to stripping away the unnecessary, leaving only what matters: quality materials,
                  skilled hands, and genuine care.
                </p>
                <p>
                  From those early days of knitting by the window, we've grown into a community of artisans
                  who share a common thread: the belief that slow, meaningful work creates objects worthy
                  of being treasured.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="bg-secondary aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-12">
                  <p className="font-heading text-6xl lg:text-7xl font-light text-accent/30 mb-4">S</p>
                  <p className="font-heading text-2xl text-foreground italic">Essence</p>
                  <p className="text-sm text-muted-foreground mt-2 tracking-luxury uppercase">The meaning behind SARAS</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 shadow-lg max-w-[200px]">
                <p className="font-heading text-3xl font-semibold text-foreground">2019</p>
                <p className="text-sm text-muted-foreground mt-1">Founded with love</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-luxury uppercase text-accent mb-4">What We Stand For</p>
            <h2 className="font-heading text-3xl lg:text-5xl xl:text-6xl font-light text-foreground">
              Our Values, <span className="italic">Woven In</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-8 lg:gap-12 items-start mb-16 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <span className="font-heading text-5xl lg:text-6xl font-light text-accent/30">
                    {value.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-2xl lg:text-3xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {value.description}
                  </p>
                  {i < values.length - 1 && (
                    <div className="w-px h-12 bg-border ml-0 mt-8" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-luxury uppercase text-accent mb-4">Our Journey</p>
            <h2 className="font-heading text-3xl lg:text-5xl font-light text-foreground">
              Milestones, <span className="italic">Stitch by Stitch</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-8 mb-10 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-heading text-xl text-accent font-semibold">{milestone.year}</span>
                </div>
                <div className="relative pl-8 border-l border-border pb-2">
                  <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-accent/40" />
                  <p className="text-muted-foreground leading-relaxed">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Community */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-luxury uppercase text-accent mb-4">Our Artisans</p>
            <h2 className="font-heading text-3xl lg:text-5xl font-light text-foreground mb-8">
              The Hands Behind <span className="italic">Every Piece</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Behind every SARAS creation is a skilled artisan with years of inherited knowledge.
              Our knitters aren't factory workers — they're craftspeople, storytellers, and keepers
              of a tradition that's slowly disappearing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We pay fair wages, provide flexible working conditions, and invest in preserving
              the handknitting traditions that make each piece extraordinary. When you wear SARAS,
              you're wearing someone's artistry.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div>
                <p className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">8</p>
                <p className="text-xs text-muted-foreground tracking-luxury uppercase mt-1">Artisans</p>
              </div>
              <div>
                <p className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">85+</p>
                <p className="text-xs text-muted-foreground tracking-luxury uppercase mt-1">Years Combined</p>
              </div>
              <div>
                <p className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">12</p>
                <p className="text-xs text-muted-foreground tracking-luxury uppercase mt-1">Countries Reached</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-light text-foreground mb-6">
              Experience the Warmth <span className="italic">Yourself</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Every piece carries a story. We'd love for you to be part of ours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/collection"
                className="bg-accent text-accent-foreground px-8 py-3 text-sm tracking-luxury uppercase hover:bg-accent/90 transition-colors duration-300"
              >
                Explore Collection
              </Link>
              <Link
                to="/craft"
                className="border border-foreground/20 text-foreground px-8 py-3 text-sm tracking-luxury uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                View Craft Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStoryPage;
