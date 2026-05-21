import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, ChevronDown, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import productScarf from "@/assets/product-scarf.jpg";
import productred from "@/assets/product-scarf(red).jpg";
import productblue from "@/assets/product-scarf(blue).jpg";
import laptopSleeve from "@/assets/laptop-sleeve.png";

type Product = {
  name: string;
  price: string;
  time: string;
  image: string;
  description: string;
  materials: string;
  care: string;
  story: string;
};

const allProducts: Record<string, Product> = {
  "striped-scarf": {
    name: "Striped Knit Scarf",
    price: "₹1,200",
    time: "8 hours",
    image: productScarf,
    description: "A soft striped scarf, hand-knitted for everyday warmth with subtle texture.",
    materials: "Premium wool yarn, hand-spun fibers.",
    care: "Hand wash cold. Lay flat to dry.",
    story: "Every stripe carries rhythm — knitted slowly, intentionally.",
  },
  "red-scarf": {
    name: "Goblin Scarf",
    price: "₹1,799",
    time: "6 hours",
    image: productred,
    description: "A deep red wool scarf crafted slowly to hold warmth and character.",
    materials: "Soft wool blend.",
    care: "Gentle hand wash only.",
    story: "Inspired by warmth in winter evenings.",
  },
  "blue-scarf": {
    name: "Indigo Blue",
    price: "₹2,799",
    time: "7 hours",
    image: productblue,
    description: "A rich indigo scarf with dense knitting, made for quiet comfort.",
    materials: "Dense knit wool.",
    care: "Cold wash, no wringing.",
    story: "Stillness woven into every thread.",
  },
  "laptop-sleeve": {
    name: "Saras Knit Sleeve",
    price: "₹1,100",
    time: "6 hours",
    image: laptopSleeve,
    description: "A handcrafted knitted sleeve in deep maroon tones, offering warmth and protection.",
    materials: "Thick wool yarn.",
    care: "Spot clean recommended.",
    story: "Protection that feels human, not industrial.",
  },
};

const AccordionItem = ({
  title,
  content,
  defaultOpen = false,
}: {
  title: string;
  content: string;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="font-heading text-lg text-foreground">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">{content}</p>
      </motion.div>
    </div>
  );
};

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts[id || ""];
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Product not found</h1>
          <Link to="/">Return home</Link>
        </div>
      </div>
    );
  }

  const otherProducts = Object.entries(allProducts)
    .filter(([key]) => key !== id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">

          {/* Back */}
          <Link to="/collection" className="inline-flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <ArrowLeft size={16} />
            Back to Collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Image */}
            <div className="sticky top-28">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                SARAS
              </p>

              <h1 className="text-4xl font-heading mb-4">
                {product.name}
              </h1>

              <p className="text-2xl text-[#39090B] mb-4">
                {product.price}
              </p>

              <p className="text-sm text-muted-foreground mb-6">
                Takes {product.time} to knit
              </p>

              <p className="mb-8 text-muted-foreground">
                {product.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mb-10">
                <a
                  href={`https://wa.me/917753896699?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                >
                  <button className="bg-[#39090B] text-white px-6 py-3">
                    Buy on WhatsApp
                  </button>
                </a>

                <button onClick={() => setLiked(!liked)}>
                  <Heart className={liked ? "fill-red-500" : ""} />
                </button>
              </div>

              {/* Accordion */}
              <AccordionItem title="Story" content={product.story} defaultOpen />
              <AccordionItem title="Materials" content={product.materials} />
              <AccordionItem title="Care" content={product.care} />
            </div>
          </div>

          {/* Related */}
          <div className="mt-20">
            <h2 className="text-2xl mb-6">You may also like</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {otherProducts.map(([key, p]) => (
                <Link key={key} to={`/product/${key}`}>
                  <img src={p.image} />
                  <h3>{p.name}</h3>
                  <p>{p.price}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;