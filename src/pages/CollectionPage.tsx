import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, X } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import productScarf from "@/assets/product-scarf.jpg";
import productred from "@/assets/product-scarf(red).jpg";
import productblue from "@/assets/product-scarf(blue).jpg";
import knittingTexture from "@/assets/knitting-texture.jpg"; // ✅ FIXED

type Category =
  | "All"
  | "Scarves"
  | "Accessories"
  | "Cardigans";

type SortOption =
  | "newest"
  | "price-low"
  | "price-high"
  | "popular";

const products = [
  {
    id: "cable-knit-scarf",
    name: "Cable Knit Scarf",
    price: 2450,
    priceLabel: "₹2,450",
    time: "8 hours",
    image: productScarf,
    category: "Scarves",
    tag: "Bestseller",
    description:
      "A luxuriously soft cable-knit scarf that wraps you in warmth and elegance.",
  },
  {
    id: "heritage-beanie",
    name: "Heritage Wool Beanie",
    price: 1850,
    priceLabel: "₹1,850",
    time: "5 hours",
    image: productred,
    category: "Accessories", // ✅ now supported
    description:
      "A timeless beanie crafted with heritage knitting techniques passed down through generations.",
  },
  {
    id: "aran-cardigan",
    name: "Aran Cable Cardigan",
    price: 6900,
    priceLabel: "₹6,900",
    time: "24 hours",
    image: productblue,
    category: "Cardigans", // ✅ now supported
    tag: "New",
    description:
      "Our masterpiece. A full Aran cable cardigan that takes 24 hours of dedicated hand-knitting.",
  },
];

const categories: Category[] = [
  "All",
  "Scarves",
  "Accessories",
  "Cardigans",
];

const CollectionPage = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");
  const [sortBy, setSortBy] =
    useState<SortOption>("newest");
  const [quickViewProduct, setQuickViewProduct] =
    useState<(typeof products)[0] | null>(null);
  const [likedProducts, setLikedProducts] =
    useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(6);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, {
    once: true,
  });

  const filteredProducts = useMemo(() => {
    let filtered =
      activeCategory === "All"
        ? products
        : products.filter(
            (p) => p.category === activeCategory
          );

    switch (sortBy) {
      case "price-low":
        return [...filtered].sort(
          (a, b) => a.price - b.price
        );
      case "price-high":
        return [...filtered].sort(
          (a, b) => b.price - a.price
        );
      case "popular":
        return [...filtered].sort(
          (a, b) =>
            (b.tag === "Bestseller" ? 1 : 0) -
            (a.tag === "Bestseller" ? 1 : 0)
        );
      default:
        return filtered;
    }
  }, [activeCategory, sortBy]);

  const toggleLike = (id: string) => {
    setLikedProducts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section
        ref={headerRef}
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={knittingTexture}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              headerInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.8 }}
          >
            <nav className="text-sm text-cream/60 mb-6">
              <Link to="/">Home</Link>
              <span className="mx-2">/</span>
              <span>Collection</span>
            </nav>

            <h1 className="text-6xl text-cream mb-4">
              The Saras Collection
            </h1>

            <p className="text-cream/70 max-w-lg mx-auto">
              Hand-knitted pieces crafted slowly, with warmth and intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6 flex flex-wrap justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as SortOption
              )
            }
            className="px-3 py-2 border rounded"
          >
            <option value="newest">Newest</option>
            <option value="price-low">
              Price: Low to High
            </option>
            <option value="price-high">
              Price: High to Low
            </option>
            <option value="popular">
              Popular
            </option>
          </select>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts
            .slice(0, visibleCount)
            .map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleLike(product.id);
                      }}
                    >
                      <Heart
                        size={16}
                        className={
                          likedProducts.has(
                            product.id
                          )
                            ? "fill-red-500"
                            : ""
                        }
                      />
                    </button>
                  </div>
                </div>

                <h3 className="mt-3">
                  {product.name}
                </h3>
                <p>{product.priceLabel}</p>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Quick View */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50"
            onClick={() =>
              setQuickViewProduct(null)
            }
          >
            <motion.div
              onClick={(e) =>
                e.stopPropagation()
              }
              className="bg-white p-6 max-w-lg w-full"
            >
              <button
                onClick={() =>
                  setQuickViewProduct(null)
                }
              >
                <X />
              </button>

              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
              />
              <h2>
                {quickViewProduct.name}
              </h2>
              <p>
                {quickViewProduct.priceLabel}
              </p>
              <p>
                {quickViewProduct.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CollectionPage;