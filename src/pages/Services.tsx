import React, { useState } from 'react';
import { Building2, Hammer, Truck, Home, Wrench, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Building2,
      title: "Construction de Bâtiments",
      description: "Construction résidentielle, commerciale et industrielle avec des matériaux de qualité supérieure et un savoir-faire reconnu.",
      features: [
        "Maisons individuelles sur mesure",
        "Immeubles résidentiels et commerciaux", 
        "Bureaux et espaces professionnels",
        "Entrepôts et bâtiments industriels",
        "Suivi de chantier personnalisé",
        "Garantie décennale"
      ],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Notre équipe d'experts accompagne vos projets de construction de A à Z, depuis les études préliminaires jusqu'à la livraison clés en main. Nous utilisons des matériaux de première qualité et respectons scrupuleusement les normes de construction en vigueur."
    },
    {
      icon: Hammer,
      title: "Travaux de Rénovation",
      description: "Rénovation complète ou partielle de vos espaces existants pour leur donner une nouvelle vie moderne et fonctionnelle.",
      features: [
        "Rénovation intérieure complète",
        "Réfection de façades",
        "Rénovation de toitures",
        "Extensions et agrandissements",
        "Mise aux normes électriques",
        "Isolation thermique et phonique"
      ],
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Que ce soit pour moderniser votre habitat, améliorer l'efficacité énergétique ou simplement rafraîchir vos espaces, nos équipes interviennent avec professionnalisme en minimisant les nuisances."
    },
    {
      icon: Truck,
      title: "Travaux Publics",
      description: "Aménagement d'infrastructures publiques et privées selon les normes en vigueur avec une expertise reconnue.",
      features: [
        "Construction et réfection de routes",
        "Réseaux de canalisations",
        "Terrassement et nivellement",
        "VRD (Voirie et Réseaux Divers)",
        "Aménagements urbains",
        "Ouvrages d'art"
      ],
      image: "https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Nous réalisons tous types d'infrastructures publiques et privées, en respectant les cahiers des charges les plus exigeants et en utilisant des équipements de pointe."
    },
    {
      icon: Home,
      title: "Aménagement Intérieur",
      description: "Conception et réalisation d'espaces intérieurs fonctionnels et esthétiques adaptés à vos besoins spécifiques.",
      features: [
        "Design d'intérieur personnalisé",
        "Menuiserie sur mesure",
        "Installation plomberie",
        "Travaux électriques",
        "Revêtements sols et murs",
        "Aménagement cuisine et salle de bain"
      ],
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Nos architectes d'intérieur et artisans qualifiés transforment vos espaces en lieux de vie harmonieux, alliant esthétique et fonctionnalité."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Services de maintenance préventive et corrective pour préserver la qualité et la durabilité de vos installations.",
      features: [
        "Entretien régulier programmé",
        "Réparations d'urgence",
        "Diagnostics techniques",
        "Conseils d'optimisation",
        "Contrats de maintenance",
        "Service après-vente"
      ],
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Notre service maintenance assure la pérennité de vos investissements grâce à des interventions régulières et des conseils d'experts."
    },
    {
      icon: MapPin,
      title: "Études & Conseils",
      description: "Études techniques approfondies et conseils personnalisés pour optimiser la réussite de vos projets de construction.",
      features: [
        "Études de faisabilité détaillées",
        "Plans techniques et architecturaux",
        "Suivi de chantier professionnel",
        "Expertise technique",
        "Conseils en optimisation",
        "Assistance maîtrise d'ouvrage"
      ],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Notre bureau d'études vous accompagne dans la conception et la planification de vos projets, en optimisant les coûts et les délais."
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Nos <span className="text-green-400">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto">
            Une gamme complète de services de construction et de travaux publics 
            pour répondre à tous vos besoins, des projets résidentiels aux infrastructures publiques.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 cursor-pointer ${
                  activeService === index ? 'ring-2 ring-red-800' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="bg-red-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className="flex items-center text-red-800 hover:text-red-900 font-semibold transition-colors">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-800 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                {React.createElement(services[activeService].icon, { className: "text-white", size: 40 })}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                {services[activeService].title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {services[activeService].details}
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-800">Nos prestations :</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105">
                <span>Demander un Devis</span>
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src={services[activeService].image} 
                alt={services[activeService].title}
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-green-100">Années d'expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Besoin d'un service personnalisé ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour étudier votre projet et vous proposer 
            une solution sur mesure adaptée à vos besoins et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Consultation Gratuite
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-semibold transition-all">
              Appeler Maintenant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;