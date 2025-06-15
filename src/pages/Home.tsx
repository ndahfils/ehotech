import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building, Phone, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Excellence en
                <span className="block text-green-400">Construction</span>
                & Travaux Publics
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                TP N'SIKAN PROJET ESPOIR, votre partenaire de confiance pour tous vos projets de construction et d'aménagement en Côte d'Ivoire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                >
                  <span>Nos Services</span>
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-semibold transition-all text-center"
                >
                  Demander un Devis
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
                <Award className="mx-auto mb-4 text-green-400" size={48} />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-gray-200">Années d'Expérience</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
                <Building className="mx-auto mb-4 text-green-400" size={48} />
                <h3 className="text-2xl font-bold mb-2">200+</h3>
                <p className="text-gray-200">Projets Réalisés</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center col-span-2">
                <Users className="mx-auto mb-4 text-green-400" size={48} />
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-gray-200">Clients Satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Nos <span className="text-red-800">Expertises</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez notre gamme complète de services de construction et de travaux publics
            </p>
            <Link 
              to="/services"
              className="inline-flex items-center bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <span>Voir tous nos services</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all">
              <div className="bg-red-800 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Building size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Construction</h3>
              <p className="text-gray-600">Bâtiments résidentiels, commerciaux et industriels</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all">
              <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Travaux Publics</h3>
              <p className="text-gray-600">Infrastructures et aménagements urbains</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all">
              <div className="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rénovation</h3>
              <p className="text-gray-600">Modernisation et amélioration de vos espaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Projects Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Nos <span className="text-red-800">Réalisations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Quelques exemples de nos projets les plus emblématiques
            </p>
            <Link 
              to="/projets"
              className="inline-flex items-center bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <span>Voir tous nos projets</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Projet résidentiel"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Complexe Résidentiel</h3>
                <p className="text-gray-600">50 logements modernes à Cocody</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img 
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Projet commercial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Centre Commercial</h3>
                <p className="text-gray-600">Complexe moderne au Plateau</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img 
                src="https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Travaux publics"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Route Nationale</h3>
                <p className="text-gray-600">25 km de route réhabilitée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              <span>Demander un Devis</span>
            </Link>
            <a 
              href="tel:+22507070707"
              className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
            >
              <Phone size={20} />
              <span>Appeler Maintenant</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;