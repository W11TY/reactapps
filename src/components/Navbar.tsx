import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "Our Story", href: "/story" },
  


  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`
      }>

      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:py-5">
        <Link to="/" className="font-heading text-2xl lg:text-3xl font-semibold tracking-wide text-foreground">SARAS

        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
          <li key={link.label}>
              <Link
              to={link.href}
              className="text-sm tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">

                {link.label}
              </Link>
            </li>
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Cart">
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">

            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) =>
            <li key={link.label}>
                  <Link
                to={link.href}
                className="text-sm tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}>

                    {link.label}
                  </Link>
                </li>
            )}
              <li className="flex gap-6 pt-4">
                <Heart size={20} className="text-muted-foreground" />
                <ShoppingBag size={20} className="text-muted-foreground" />
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

};

export default Navbar;