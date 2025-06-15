import React from 'react';
import { ArrowRight, Award, Users, Building } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-900 text-white">
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
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
                <span>Nos Services</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-semibold transition-all">
                Demander un Devis
              </button>
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
  );
};

export default Hero;