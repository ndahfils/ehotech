import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Services', href: '/services' },
    { name: 'Projets', href: '/projets' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Barre de contact supérieure */}
      <div className="bg-primary-600 text-white py-3 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+225 XX XX XX XX XX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@tpnsikan.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Abidjan, Côte d'Ivoire</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">🏗️ Votre partenaire construction de confiance</span>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-xl backdrop-blur-md' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/logo tp n'sikan copy.png" 
                alt="TP N'SIKAN PROJET ESPOIR" 
                className="h-14 w-auto transition-transform duration-300"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-heading font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                  TP N'SIKAN
                </div>
                <div className="text-sm text-secondary-600 font-medium">
                  PROJET ESPOIR
                </div>
              </div>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-primary-600 ${
                    location.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-neutral-700'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-600"
                    />
                  )}
                </Link>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Devis Gratuit
                </Link>
              </motion.div>
            </div>

            {/* Menu mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-700 hover:text-primary-600 transition-colors p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Menu mobile ouvert */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t border-neutral-200 overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                        location.pathname === item.href
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="block mx-3 mt-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-lg font-medium text-center hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Devis Gratuit
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;