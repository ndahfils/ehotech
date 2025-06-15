import React from 'react';
import { Building2, Hammer, Truck, Home, Wrench, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction de Bâtiments",
      description: "Construction résidentielle, commerciale et industrielle avec des matériaux de qualité supérieure.",
      features: ["Maisons individuelles", "Immeubles", "Bureaux", "Entrepôts"]
    },
    {
      icon: Hammer,
      title: "Travaux de Rénovation",
      description: "Rénovation complète ou partielle de vos espaces existants pour leur donner une nouvelle vie.",
      features: ["Rénovation intérieure", "Façades", "Toitures", "Extensions"]
    },
    {
      icon: Truck,
      title: "Travaux Publics",
      description: "Aménagement d'infrastructures publiques et privées selon les normes en vigueur.",
      features: ["Routes", "Canalisations", "Terrassement", "VRD"]
    },
    {
      icon: Home,
      title: "Aménagement Intérieur",
      description: "Conception et réalisation d'espaces intérieurs fonctionnels et esthétiques.",
      features: ["Design d'intérieur", "Menuiserie", "Plomberie", "Électricité"]
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Services de maintenance préventive et corrective pour vos installations.",
      features: ["Entretien régulier", "Réparations", "Diagnostics", "Conseils"]
    },
    {
      icon: MapPin,
      title: "Études & Conseils",
      description: "Études techniques approfondies et conseils personnalisés pour vos projets.",
      features: ["Études de faisabilité", "Plans techniques", "Suivi de chantier", "Expertise"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nos <span className="text-red-800">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons une gamme complète de services de construction et de travaux publics 
            pour répondre à tous vos besoins, des projets résidentiels aux infrastructures publiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="bg-red-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;