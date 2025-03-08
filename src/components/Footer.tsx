
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-midnight text-ivory">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-royal font-bold text-3xl font-serif tracking-tight">
                <span className="text-ivory">Royal</span> Nepal
              </h2>
            </Link>
            <p className="text-ivory/70 mb-6 max-w-md">
              Royal Nepal celebrates the rich monarchical heritage of Nepal, preserving the legacy
              of kings and queens who shaped the nation's history over centuries.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-ivory/60 hover:text-royal transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-ivory/60 hover:text-royal transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-ivory/60 hover:text-royal transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-ivory/60 hover:text-royal transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-ivory/70 hover:text-royal transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-ivory/70 hover:text-royal transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/kings"
                  className="text-ivory/70 hover:text-royal transition-colors duration-300"
                >
                  Kings
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-ivory/70 hover:text-royal transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/map"
                  className="text-ivory/70 hover:text-royal transition-colors duration-300"
                >
                  Royal Map
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-ivory/70 hover:text-royal transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-ivory/70">info@royalnepal.com</li>
              <li className="text-ivory/70">+977 1 234 5678</li>
              <li className="text-ivory/70">Kathmandu, Nepal</li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center text-royal hover:text-royal-light transition-colors duration-300"
              >
                <span className="mr-2">Get in touch</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ivory/50 text-sm">
            © {new Date().getFullYear()} Royal Nepal. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a href="#" className="text-ivory/50 hover:text-ivory text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-ivory/50 hover:text-ivory text-sm">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="bg-royal/20 hover:bg-royal/30 text-royal p-2 rounded-full transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
