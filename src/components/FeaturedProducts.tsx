import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

import productScarf from "@/assets/product-scarf(red).jpg";
import productBeanie from "@/assets/product-scarf(blue).jpg";
import productCardigan from "@/assets/product-scarf.jpg";
import productMittens from "@/assets/product-mittens.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productSocks from "@/assets/product-socks.jpg";

const products = [
  { id: "cable-knit-scarf", name: "Cable Knit Scarf Red", price: "₹2,450", time: "8 hours", image: productScarf, tag: "Bestseller" },
  { id: "cable-knit-scarf", name: "Cable Knit Scarf Blue", price: "₹2,450", time: "8 hours", image: productScarf, tag: "Bestseller" },
  { id: "cable-knit-scarf", name: "Cable Knit Scarf Striped", price: "₹2,450", time: "8 hours", image: productScarf, tag: "Bestseller" },
  { id: "cable-knit-scarf", name: "Cable Knit Scarf", price: "₹2,450", time: "8 hours", image: productScarf, tag: "Bestseller" },
  { id: "cable-knit-scarf", name: "Cable Knit Scarf", price: "₹2,450", time: "8 hours", image: productScarf, tag: "Bestseller" },
  { id: "cable-knit-scarf", name: "Cable Knit Scarf", price: "₹2,450", time: "8 hours", image: productScarf, tag: "Bestseller" },
  { id: "cable-knit-scarf", name: "Cable Knit Scarf", price: "₹2,450", time: "8 hours", image: productScarf, tag: "Bestseller" },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group ${index === 0 || index === 4 ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-card">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover aspect-[4/5] transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />

          {/* Tag */}
          {product.tag && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs tracking-luxury uppercase">
              {product.tag}
            </span>
          )}

          {/* Wishlist */}
          <button
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Add to wishlist"
          >
            <Heart size={16} className={liked ? "fill-accent text-accent" : "text-foreground"} />
          </button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <button className="w-full py-3 bg-foreground text-background text-sm tracking-luxury uppercase transition-colors hover:bg-primary">
              Wrap Yourself in Warmth
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-4 px-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-heading text-lg text-foreground">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">Crafted in {product.time}</p>
          </div>
          <p className="font-heading text-lg text-foreground">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-luxury uppercase text-accent mb-4">Handpicked for You</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-light text-foreground">
            Our Collection
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/collection"
            className="inline-block px-10 py-4 border border-foreground text-foreground text-sm tracking-luxury uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View Full Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
