import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/logo tp n'sikan.png" 
                alt="TP N'SIKAN PROJET ESPOIR" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 leading-relaxed">
                Votre partenaire de confiance pour tous vos projets de construction 
                et de travaux publics en Côte d'Ivoire depuis plus de 15 ans.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-800 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-red-800 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-red-800 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Construction de Bâtiments</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Travaux de Rénovation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Travaux Publics</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Aménagement Intérieur</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Études & Conseils</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projets" className="text-gray-300 hover:text-white transition-colors">Projets</Link></li>
              <li><Link to="/apropos" className="text-gray-300 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Devis Gratuit</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-400 mt-1" size={18} />
                <div className="text-gray-300">
                  <p>Abidjan, Cocody Riviera Golf</p>
                  <p>Rue des Jardins, Lot 247</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-red-400" size={18} />
                <span className="text-gray-300">+225 07 07 07 07 07</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-red-400" size={18} />
                <span className="text-gray-300">contact@tpnsikan.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2024 TP N'SIKAN PROJET ESPOIR. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-red-800 hover:bg-red-700 p-2 rounded-lg transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;