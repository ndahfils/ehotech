import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo tp n'sikan.png" 
                alt="TP N'SIKAN PROJET ESPOIR" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-lg font-heading font-bold text-primary-400">
                  TP N'SIKAN
                </div>
                <div className="text-sm text-secondary-400 font-medium">
                  PROJET ESPOIR
                </div>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction, 
              rénovation et aménagement en Côte d'Ivoire.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/tpnsikanprojetespoir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-neutral-300 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projets" className="text-neutral-300 hover:text-white transition-colors">Projets</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Nos Services</h3>
            <ul className="space-y-2">
              <li><span className="text-neutral-300">Construction neuve</span></li>
              <li><span className="text-neutral-300">Rénovation</span></li>
              <li><span className="text-neutral-300">Aménagement</span></li>
              <li><span className="text-neutral-300">Maçonnerie</span></li>
              <li><span className="text-neutral-300">Électricité</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  Abidjan, Côte d'Ivoire
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">+225 XX XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">contact@tpnsikan.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 TP N'SIKAN PROJET ESPOIR. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;