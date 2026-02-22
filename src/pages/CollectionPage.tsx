import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import productScarf from "@/assets/product-scarf.jpg";
import productBeanie from "@/assets/product-beanie.jpg";
import productCardigan from "@/assets/product-cardigan.jpg";
import productMittens from "@/assets/product-mittens.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productSocks from "@/assets/product-socks.jpg";
import knittingTexture from "@/assets/knitting-texture.jpg";

type Category = "All" | "Sweaters" | "Cardigans" | "Scarves" | "Accessories" | "Custom Knits";
type SortOption = "newest" | "price-low" | "price-high" | "popular";

const products = [
  { id: "cable-knit-scarf", name: "Cable Knit Scarf", price: 2450, priceLabel: "₹2,450", time: "8 hours", image: productScarf, category: "Scarves" as Category, tag: "Bestseller", description: "A luxuriously soft cable-knit scarf that wraps you in warmth and elegance." },
  { id: "heritage-beanie", name: "Heritage Wool Beanie", price: 1850, priceLabel: "₹1,850", time: "5 hours", image: productBeanie, category: "Accessories" as Category, description: "A timeless beanie crafted with heritage knitting techniques passed down through generations." },
  { id: "aran-cardigan", name: "Aran Cable Cardigan", price: 6900, priceLabel: "₹6,900", time: "24 hours", image: productCardigan, category: "Cardigans" as Category, tag: "New", description: "Our masterpiece. A full Aran cable cardigan that takes 24 hours of dedicated hand-knitting." },
  { id: "nordic-mittens", name: "Nordic Pattern Mittens", price: 1650, priceLabel: "₹1,650", time: "6 hours", image: productMittens, category: "Accessories" as Category, description: "Beautifully patterned mittens featuring traditional Nordic colorwork." },
  { id: "chunky-throw", name: "Chunky Throw Blanket", price: 5200, priceLabel: "₹5,200", time: "18 hours", image: productBlanket, category: "Custom Knits" as Category, tag: "Limited", description: "A generous, chunky knit throw blanket that transforms any space into a cozy sanctuary." },
  { id: "fireside-socks", name: "Fireside Wool Socks", price: 1250, priceLabel: "₹1,250", time: "4 hours", image: productSocks, category: "Accessories" as Category, description: "Thick, warm wool socks designed for cozy evenings by the fire." },
];

const categories: Category[] = ["All", "Sweaters", "Cardigans", "Scarves", "Accessories", "Custom Knits"];

const CollectionPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [quickViewProduct, setQuickViewProduct] = useState<typeof products[0] | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(6);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filteredProducts = useMemo(() => {
    let filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
    switch (sortBy) {
      case "price-low": return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high": return [...filtered].sort((a, b) => b.price - a.price);
      case "popular": return [...filtered].sort((a, b) => (b.tag ? 1 : 0) - (a.tag ? 1 : 0));
      default: return filtered;
    }
  }, [activeCategory, sortBy]);

  const toggleLike = (id: string) => {
    setLikedProducts(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Collection Header */}
      <section ref={headerRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={knittingTexture} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <nav className="text-sm text-cream/60 mb-6">
              <Link to="/" className="hover:text-cream transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-cream/90">Collection</span>
            </nav>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-4">
              The Saras Collection
            </h1>
            <p className="text-cream/70 text-lg max-w-lg mx-auto font-body">
              Hand-knitted pieces crafted slowly, with warmth and intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Sort */}
      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                  className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-card border border-border rounded-md text-sm text-foreground font-body focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.slice(0, visibleCount).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-card">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
                  </Link>

                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs tracking-luxury uppercase">
                      {product.tag}
                    </span>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => { e.preventDefault(); setQuickViewProduct(product); }}
                      className="p-2 bg-background/90 backdrop-blur-sm hover:bg-background transition-colors"
                      aria-label="Quick view"
                    >
                      <Eye size={16} className="text-foreground" />
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); toggleLike(product.id); }}
                      className="p-2 bg-background/90 backdrop-blur-sm hover:bg-background transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={16} className={likedProducts.has(product.id) ? "fill-accent text-accent" : "text-foreground"} />
                    </button>
                  </div>

                  {/* Quick Add */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <button className="w-full py-3 bg-accent text-accent-foreground text-sm tracking-luxury uppercase transition-colors hover:bg-accent/90">
                      Wrap Yourself in Warmth
                    </button>
                  </div>
                </div>

                <div className="mt-4 px-1">
                  <p className="text-xs text-muted-foreground tracking-luxury uppercase mb-1">Hand-knitted</p>
                  <h3 className="font-heading text-lg text-foreground">{product.name}</h3>
                  <p className="font-heading text-base text-gold mt-1">{product.priceLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mid-page story strip */}
          {filteredProducts.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="my-16 py-12 px-8 bg-secondary text-center rounded-sm"
            >
              <p className="font-heading text-2xl lg:text-3xl font-light text-foreground italic">
                "Every Saras piece is shaped slowly, one patient stitch at a time."
              </p>
            </motion.div>
          )}

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="inline-block px-10 py-4 border border-accent text-accent text-sm tracking-luxury uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Load More Pieces
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setQuickViewProduct(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-accent/70 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative bg-background max-w-3xl w-full grid md:grid-cols-2 gap-0 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                aria-label="Close quick view"
              >
                <X size={18} className="text-foreground" />
              </button>

              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full aspect-[4/5] md:aspect-auto md:h-full object-cover"
              />

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-xs tracking-luxury uppercase text-accent mb-3">SARAS · Hand-knitted</p>
                <h3 className="font-heading text-3xl text-foreground mb-2">{quickViewProduct.name}</h3>
                <p className="font-heading text-xl text-gold mb-4">{quickViewProduct.priceLabel}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{quickViewProduct.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Crafted in {quickViewProduct.time}
                </div>
                <Link
                  to={`/product/${quickViewProduct.id}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="inline-block text-center py-4 bg-accent text-accent-foreground text-sm tracking-luxury uppercase hover:bg-accent/90 transition-colors"
                >
                  View Full Craft Story
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CollectionPage;
