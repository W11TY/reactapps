import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, ChevronDown, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import productScarf from "@/assets/product-scarf.jpg";
import productBeanie from "@/assets/product-beanie.jpg";
import productCardigan from "@/assets/product-cardigan.jpg";
import productMittens from "@/assets/product-mittens.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productSocks from "@/assets/product-socks.jpg";

const allProducts: Record<string, {
  name: string; price: string; time: string; image: string;
  description: string; materials: string; care: string; story: string;
}> = {
  "cable-knit-scarf": {
    name: "Cable Knit Scarf",
    price: "₹2,450",
    time: "8 hours",
    image: productScarf,
    description: "A luxuriously soft cable-knit scarf that wraps you in warmth and elegance. Each cable pattern is meticulously crafted by hand, creating a piece that's as beautiful as it is cozy.",
    materials: "100% Merino Wool · Hand-spun · Naturally dyed in warm cream · Sourced from family-owned farms in Himachal Pradesh",
    care: "Hand wash gently in cool water with mild detergent. Lay flat to dry on a clean towel. Store folded, never hang. Avoid direct sunlight when drying.",
    story: "This scarf was born from the desire to create something that feels like a warm embrace on cold mornings. Our artisan Meera spends 8 hours on each piece, ensuring every cable twist is perfect.",
  },
  "heritage-beanie": {
    name: "Heritage Wool Beanie",
    price: "₹1,850",
    time: "5 hours",
    image: productBeanie,
    description: "A timeless beanie crafted with heritage knitting techniques passed down through generations. Rich wool brown tones with subtle cream detailing.",
    materials: "100% Highland Wool · Hand-knitted · Natural brown and cream dyes · Elasticated ribbed brim",
    care: "Hand wash in cold water. Reshape while damp. Dry flat away from heat. Store in a cool, dry place.",
    story: "Inspired by the beanies worn by mountain shepherds, this piece carries centuries of knitting wisdom in its stitches. Each one takes our artisan Ravi 5 hours to complete.",
  },
  "aran-cardigan": {
    name: "Aran Cable Cardigan",
    price: "₹6,900",
    time: "24 hours",
    image: productCardigan,
    description: "Our masterpiece. A full Aran cable cardigan that takes 24 hours of dedicated hand-knitting. Traditional cable patterns meet modern comfort.",
    materials: "100% Organic Merino Wool · Hand-knitted · Wooden buttons hand-carved · Natural cream color",
    care: "Dry clean recommended. If hand washing, use wool-specific detergent in lukewarm water. Never wring. Lay flat to dry.",
    story: "The Aran cardigan is a labor of love that spans three days of knitting. Each cable pattern tells a story — the honeycomb for hard work, the cable for safety, the diamond for wealth.",
  },
  "nordic-mittens": {
    name: "Nordic Pattern Mittens",
    price: "₹1,650",
    time: "6 hours",
    image: productMittens,
    description: "Beautifully patterned mittens featuring traditional Nordic colorwork. Warm, playful, and utterly charming.",
    materials: "100% Wool blend · Two-color jacquard technique · Fleece-lined interior · Ribbed cuffs",
    care: "Hand wash in cool water. Do not bleach. Reshape and dry flat. Store away from moths with cedar blocks.",
    story: "These mittens feature a traditional Nordic pattern adapted by our artisan Deepa, who learned colorwork knitting from her grandmother in Kashmir.",
  },
  "chunky-throw": {
    name: "Chunky Throw Blanket",
    price: "₹5,200",
    time: "18 hours",
    image: productBlanket,
    description: "A generous, chunky knit throw blanket that transforms any space into a cozy sanctuary. Made with super-bulky yarn for maximum warmth.",
    materials: "100% Extra-fine Merino · Super-bulky weight · Hand-knitted · Natural cream with fringe detail",
    care: "Spot clean or dry clean only due to size. Air regularly. Fold for storage, do not compress.",
    story: "This blanket is our most ambitious piece — 18 hours of continuous knitting with super-thick yarn, creating a blanket that feels like a warm cloud.",
  },
  "fireside-socks": {
    name: "Fireside Wool Socks",
    price: "₹1,250",
    time: "4 hours",
    image: productSocks,
    description: "Thick, warm wool socks designed for cozy evenings by the fire. Reinforced heel and toe for lasting comfort.",
    materials: "80% Wool, 20% Nylon for durability · Hand-knitted · Reinforced construction · Warm brown with cream accents",
    care: "Hand wash in lukewarm water. Turn inside out. Dry flat. These socks will felt if machine washed.",
    story: "Designed for those quiet evenings at home, these socks are knitted with a blend that balances warmth with wear. Each pair takes 4 hours of careful work.",
  },
};

const AccordionItem = ({ title, content, defaultOpen = false }: { title: string; content: string; defaultOpen?: boolean }) => {
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
          className={`text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Product not found</h1>
          <Link to="/" className="text-accent hover:underline">Return home</Link>
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
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={16} />
              Back to Collection
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="overflow-hidden bg-card sticky top-28">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-6 left-6 px-4 py-2 bg-accent text-accent-foreground text-xs tracking-luxury uppercase">
                  Crafted by Hand
                </span>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm tracking-luxury uppercase text-accent mb-3">SARAS</p>
              <h1 className="font-heading text-4xl lg:text-5xl font-light text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-heading text-2xl text-foreground mb-6">{product.price}</p>

              <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                Takes {product.time} to knit
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Actions */}
              <div className="flex gap-3 mb-12">
                <button className="flex-1 py-4 bg-foreground text-background text-sm tracking-luxury uppercase font-medium hover:bg-primary transition-colors duration-300">
                  Wrap Yourself in Warmth
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className="px-5 py-4 border border-border hover:border-foreground transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} className={liked ? "fill-accent text-accent" : "text-foreground"} />
                </button>
              </div>

              {/* Accordion Details */}
              <div>
                <AccordionItem title="Product Story" content={product.story} defaultOpen />
                <AccordionItem title="Materials & Yarn" content={product.materials} />
                <AccordionItem title="Care Instructions" content={product.care} />
                <AccordionItem
                  title="Shipping & Handmade Note"
                  content="Each piece is made to order. Please allow 7-14 days for your item to be lovingly crafted and shipped. As every piece is handmade, slight variations in pattern and color are natural — they're what make your piece uniquely yours."
                />
              </div>
            </motion.div>
          </div>

          {/* You May Also Love */}
          <div className="mt-24">
            <h2 className="font-heading text-3xl text-foreground text-center mb-12">
              You May Also Love
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherProducts.map(([key, p]) => (
                <Link key={key} to={`/product/${key}`} className="group">
                  <div className="overflow-hidden bg-card mb-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading text-lg text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.price}</p>
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
