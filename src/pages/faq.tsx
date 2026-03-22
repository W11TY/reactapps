import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const faqCategories = [
  {
    title: "About Our Knitwear",
    questions: [
      {
        q: "Are all SARAS pieces truly handmade?",
        a: "Yes, every single piece is hand-knitted by our artisans. No machines are involved in the knitting process. Each sweater, scarf, or accessory takes between 8–20 hours of patient, loving handwork.",
      },
      {
        q: "What materials do you use?",
        a: "We use ethically sourced natural fibers — primarily merino wool, organic cotton, and alpaca blends. Our yarns come from family-owned farms that prioritize animal welfare and sustainable practices.",
      },
      {
        q: "Why are SARAS pieces priced the way they are?",
        a: "Our pricing reflects the true cost of handmade craftsmanship: hours of skilled artisan labor, premium ethically sourced materials, and a commitment to fair wages. Each piece is an investment in slow fashion and human artistry.",
      },
      {
        q: "How should I care for my knitwear?",
        a: "Hand wash in cool water with a gentle wool detergent. Lay flat on a towel to dry — never wring or hang. Store folded, ideally with a cedar block to naturally repel moths. Treat your piece gently, and it will last for years.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    questions: [
      {
        q: "How long does it take to receive my order?",
        a: "Since each piece is handcrafted, please allow 5–10 business days for preparation. Shipping adds an additional 3–7 business days depending on your location. We'll keep you updated every step of the way.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes! We ship worldwide. Domestic orders over ₹2,500 qualify for free shipping. International shipping costs are calculated at checkout based on your destination.",
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Once your piece ships, you'll receive an email with a tracking number so you can follow your package's journey to your doorstep.",
      },
      {
        q: "Do you offer gift wrapping?",
        a: "Every SARAS order arrives beautifully packaged in tissue paper and a reusable cotton pouch within a recycled kraft box. For an extra-special touch, we offer a handwritten note option at checkout.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 14-day return window from the date of delivery. Items must be unworn, unwashed, and in their original packaging. Because each piece is handmade, we ask that returns are handled with the same care we put into creating them.",
      },
      {
        q: "Can I exchange for a different size?",
        a: "Yes, we're happy to exchange for a different size if available. Contact us within 14 days of delivery, and we'll guide you through the process. Return shipping for exchanges within India is complimentary.",
      },
      {
        q: "What if my piece arrives damaged?",
        a: "We inspect every piece before shipping, but if something arrives imperfect, please reach out within 48 hours with photos. We'll make it right — whether through repair, replacement, or refund.",
      },
    ],
  },
  {
    title: "Custom & Special Orders",
    questions: [
      {
        q: "Can I request a custom piece?",
        a: "We love creating bespoke pieces. Whether it's a specific color, size adjustment, or a completely custom design, reach out to us and we'll discuss what's possible. Custom orders typically take 2–4 weeks.",
      },
      {
        q: "Do you offer wholesale or bulk orders?",
        a: "For boutique partnerships, corporate gifting, or bulk orders, please contact us directly. We work with select partners who share our values of slow, meaningful craftsmanship.",
      },
      {
        q: "Can I visit your studio?",
        a: "We occasionally host studio visits and knitting workshops. Follow us on Instagram or subscribe to our newsletter to be the first to know about upcoming events.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-secondary">
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
                  <BreadcrumbPage>FAQ</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-sm tracking-luxury uppercase text-accent mb-4">Questions & Answers</p>
            <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-4">
              Everything You'd <span className="italic">Like to Know</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Thoughtful answers to the questions we're asked most often — about our craft, our materials, and the care behind every stitch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              custom={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="mb-16 last:mb-0"
            >
              <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="border-t border-border">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`${catIndex}-${qIndex}`} className="border-border">
                    <AccordionTrigger className="text-left font-body text-foreground hover:no-underline hover:text-accent py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We'd love to hear from you. Reach out anytime — we respond with the same care we put into our knitwear.
            </p>
            <Link
              to="/"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 text-sm tracking-luxury uppercase hover:bg-accent/90 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
