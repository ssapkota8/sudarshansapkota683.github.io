import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-portfolio-dark/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-mono text-portfolio-accent font-medium text-xl">
            SS
          </span>
          <h1 className="text-xl font-semibold hidden sm:block">
            Sudarshan <span className="text-portfolio-accent">Sapkota</span>
          </h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "font-medium transition-colors hover:text-portfolio-accent link-underline",
                    location.pathname === item.path && "text-portfolio-accent"
                  )}
                >
                  <span className="font-mono text-xs text-portfolio-accent mr-1">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>{" "}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white dark:bg-portfolio-dark z-40 transition-transform duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "text-xl font-medium transition-colors hover:text-portfolio-accent",
                    location.pathname === item.path && "text-portfolio-accent"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
