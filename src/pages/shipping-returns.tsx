import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, RotateCcw, Clock, Shield, Heart, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const shippingInfo = [
  {
    icon: Package,
    title: "Thoughtful Packaging",
    description:
      "Each piece is wrapped in tissue paper, nestled in a reusable cotton pouch, and placed in a recycled kraft box — because the unboxing should feel as warm as the knitwear itself.",
  },
  {
    icon: Clock,
    title: "Crafting & Delivery Times",
    description:
      "Since every SARAS piece is handcrafted, please allow 5–10 business days for preparation. Shipping typically takes an additional 3–7 business days depending on your location.",
  },
  {
    icon: MapPin,
    title: "We Ship Worldwide",
    description:
      "From our studio to your doorstep, wherever you are. Domestic orders ship free above ₹2,500. International shipping is calculated at checkout.",
  },
  {
    icon: Shield,
    title: "Tracking & Care",
    description:
      "Every order includes a tracking number so you can follow your piece on its journey. We also include a handwritten care card with each shipment.",
  },
];

const returnsInfo = [
  {
    icon: RotateCcw,
    title: "Gentle Returns Policy",
    description:
      "We understand that sometimes a piece doesn't feel right. You may return unworn items within 14 days of delivery for a full refund or exchange.",
  },
  {
    icon: Heart,
    title: "Made with Love Guarantee",
    description:
      "If your handcrafted piece arrives with any imperfection that isn't part of its artisan character, we'll replace it — no questions asked.",
  },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Handcrafting takes 5–10 business days, followed by 3–7 business days for delivery. We'll keep you updated at every step.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes — all domestic orders above ₹2,500 ship free. International shipping rates are calculated based on destination and weight.",
  },
  {
    question: "Can I return a custom or made-to-order piece?",
    answer:
      "Custom pieces are crafted specifically for you and cannot be returned unless they arrive damaged or with a defect. We'll work with you to make it right.",
  },
  {
    question: "How do I initiate a return?",
    answer:
      "Simply reach out to us at hello@saras.in within 14 days of delivery. We'll guide you through a gentle, hassle-free return process.",
  },
  {
    question: "What condition should the item be in for a return?",
    answer:
      "Items must be unworn, unwashed, and in their original packaging. We understand handmade pieces are delicate — just ensure they're in the same condition as when they arrived.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "Once we receive and inspect the returned item, refunds are processed within 5–7 business days to your original payment method.",
  },
];

const ShippingReturnsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shipping & Returns</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="font-heading text-4xl lg:text-5xl text-foreground mb-4">
              Shipping & Returns
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every SARAS piece travels from our hands to yours with the same care
              and intention that went into crafting it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-4xl text-foreground mb-12"
          >
            Shipping
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {shippingInfo.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-secondary/50 rounded-lg p-8"
              >
                <item.icon size={24} className="text-accent mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Returns Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-4xl text-foreground mb-12"
          >
            Returns & Exchanges
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {returnsInfo.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-secondary/50 rounded-lg p-8"
              >
                <item.icon size={24} className="text-accent mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg p-8 lg:p-12"
          >
            <h3 className="font-heading text-2xl text-foreground mb-8">
              How Returns Work
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Reach Out", desc: "Email us within 14 days of delivery at hello@saras.in" },
                { step: "02", title: "Ship It Back", desc: "We'll send you a prepaid return label and packing guidance" },
                { step: "03", title: "Refund or Exchange", desc: "Once received, we process your refund within 5–7 business days" },
              ].map((s) => (
                <div key={s.step}>
                  <span className="text-accent font-heading text-3xl">{s.step}</span>
                  <h4 className="font-heading text-lg text-foreground mt-2 mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-4xl text-foreground mb-12 text-center"
          >
            Common Questions
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="font-heading text-base text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Emotional CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're here to help — reach out anytime and we'll respond with the same warmth we knit into every piece.
            </p>
            <Link
              to="/"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md text-sm tracking-luxury uppercase hover:bg-accent/90 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingReturnsPage;
