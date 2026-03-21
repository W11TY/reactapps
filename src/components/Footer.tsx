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

          {/* About */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-background/40 mb-6">
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/story"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-background/40 mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/shipping-returns"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © 2026 SARAS.
          </p>

          <div className="flex gap-6">
            {/* External */}
            <a
              href="https://www.instagram.com/saras.in_?igsh=YXFibW50M3AweXZz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-background/40 hover:text-background transition-colors uppercase tracking-luxury"
            >
              Instagram
            </a>

            {/* Internal */}
            <Link
              to="/newsletter"
              className="text-xs text-background/40 hover:text-background transition-colors uppercase tracking-luxury"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;