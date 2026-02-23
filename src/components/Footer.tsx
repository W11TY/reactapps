import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-background/80 py-16 lg:py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl text-background block mb-4">
              SARAS
            </Link>
            <p className="text-sm leading-relaxed text-background/60">
              Handcrafted knitwear made with love, patience, and the finest natural yarns.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-background/40 mb-6">Shop</h4>
            <ul className="space-y-3">
              {["New Arrivals", "Sweaters & Cardigans", "Scarves & Wraps", "Accessories", "Home & Blankets"].map((item) =>
              <li key={item}>
                  <Link to="/collection" className="text-sm text-background/60 hover:text-background transition-colors">
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-background/40 mb-6">About</h4>
            <ul className="space-y-3">
              {["Our Story", "Craft Process", "Artisan Community", "Sustainability", "Journal"].map((item) =>
              <li key={item}>
                  <Link to="/story" className="text-sm text-background/60 hover:text-background transition-colors">
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Care */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-background/40 mb-6">Support</h4>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">© 2026 SARAS. Crafted with BMH

          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "Newsletter"].map((item) =>
            <a key={item} href="#" className="text-xs text-background/40 hover:text-background transition-colors uppercase tracking-luxury">
                {item}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;