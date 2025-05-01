import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sudarshan Sapkota</h3>
            <p className="text-portfolio-muted mb-4">
              IT professional specializing in cloud computing, networking, and cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sudarshansapkota86@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+14376650843"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-portfolio-muted hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-portfolio-muted hover:text-white transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-portfolio-muted hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-portfolio-muted hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-portfolio-muted hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-portfolio-muted">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:sudarshansapkota86@gmail.com" className="hover:text-white transition-colors">
                  sudarshansapkota86@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+14376650843" className="hover:text-white transition-colors">
                  +1 437-665-0843
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-portfolio-muted">
            &copy; {currentYear} Sudarshan Sapkota. All rights reserved.
          </p>
          <p className="text-sm text-portfolio-muted mt-2 md:mt-0">
            Made with <span className="text-portfolio-accent">❤️</span> by Sudarshan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
