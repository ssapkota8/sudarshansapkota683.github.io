
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Kings', path: '/kings' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Map', path: '/map' },
    { name: 'Contact', path: '/contact' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-midnight/95 backdrop-blur-md py-4 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center flex-col md:flex-row"
        >
          <div className="text-royal font-bold text-3xl font-serif tracking-tight">
            <span className="text-ivory">Royal</span> Nepal
          </div>
          <span className="text-ivory/70 text-xs md:ml-2 mt-1 md:mt-0">by Sudarshan Sapkota</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-ivory opacity-80 hover:opacity-100 text-sm font-medium transition-all duration-200 link-underline",
                location.pathname === route.path && "opacity-100 font-semibold"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-ivory"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-midnight/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center space-y-8 pt-12">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-ivory opacity-80 hover:opacity-100 text-lg font-medium transition-all duration-200",
                location.pathname === route.path && "opacity-100 font-semibold text-royal"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
