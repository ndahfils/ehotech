import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+225 07 07 07 07 07</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>contact@tpnsikan.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Votre partenaire de confiance en construction</span>
            <Link 
              to="/admin" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm flex items-center space-x-1 transition-all"
              title="Interface d'administration"
            >
              <Settings size={14} />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo tp n'sikan.png" 
              alt="TP N'SIKAN PROJET ESPOIR" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-800 border-b-2 border-red-800 pb-1' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-red-800 border-b-2 border-red-800 pb-1' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/projets" 
              className={`font-medium transition-colors ${
                isActive('/projets') 
                  ? 'text-red-800 border-b-2 border-red-800 pb-1' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              Projets
            </Link>
            <Link 
              to="/apropos" 
              className={`font-medium transition-colors ${
                isActive('/apropos') 
                  ? 'text-red-800 border-b-2 border-red-800 pb-1' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              À Propos
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-red-800 border-b-2 border-red-800 pb-1' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium ${
                  isActive('/') ? 'text-red-800' : 'text-gray-700 hover:text-red-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                className={`font-medium ${
                  isActive('/services') ? 'text-red-800' : 'text-gray-700 hover:text-red-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/projets" 
                className={`font-medium ${
                  isActive('/projets') ? 'text-red-800' : 'text-gray-700 hover:text-red-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </Link>
              <Link 
                to="/apropos" 
                className={`font-medium ${
                  isActive('/apropos') ? 'text-red-800' : 'text-gray-700 hover:text-red-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${
                  isActive('/contact') ? 'text-red-800' : 'text-gray-700 hover:text-red-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/admin" 
                className="font-medium text-red-800 border-t pt-4 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings size={16} />
                <span>Administration</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;