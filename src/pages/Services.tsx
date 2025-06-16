import React from 'react';
import { Building, Wrench, Palette, Zap, Hammer, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Building,
      title: 'Construction Neuve',
      description: 'Conception et réalisation de maisons individuelles, villas et bâtiments commerciaux selon vos besoins spécifiques.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Étude de faisabilité complète',
        'Plans architecturaux personnalisés',
        'Gestion complète du projet',
        'Matériaux de première qualité',
        'Respect des normes de construction',
        'Garantie décennale'
      ],
      process: [
        'Consultation et analyse des besoins',
        'Conception et plans détaillés',
        'Devis transparent et détaillé',
        'Obtention des autorisations',
        'Réalisation des travaux',
        'Livraison et suivi'
      ]
    },
    {
      icon: Wrench,
      title: 'Rénovation',
      description: 'Modernisation et amélioration de vos espaces existants avec des solutions innovantes et durables.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Diagnostic technique complet',
        'Rénovation énergétique',
        'Mise aux normes électriques',
        'Isolation thermique et phonique',
        'Réfection de toiture',
        'Modernisation des installations'
      ],
      process: [
        'Diagnostic de l\'existant',
        'Proposition d\'amélioration',
        'Planning des interventions',
        'Travaux de rénovation',
        'Contrôle qualité',
        'Réception des travaux'
      ]
    },
    {
      icon: Palette,
      title: 'Aménagement Intérieur',
      description: 'Création d\'espaces fonctionnels et esthétiques qui reflètent votre personnalité et vos besoins.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Design d\'intérieur personnalisé',
        'Optimisation de l\'espace',
        'Choix des matériaux et couleurs',
        'Mobilier sur mesure',
        'Éclairage décoratif',
        'Décoration complète'
      ],
      process: [
        'Analyse de vos goûts et besoins',
        'Création de concepts design',
        'Sélection des matériaux',
        'Réalisation des aménagements',
        'Installation du mobilier',
        'Touches finales de décoration'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Installation et rénovation électrique complète selon les normes en vigueur.'
    },
    {
      icon: Hammer,
      title: 'Maçonnerie',
      description: 'Travaux de maçonnerie générale, murs, fondations et structures.'
    },
    {
      icon: Shield,
      title: 'Étanchéité',
      description: 'Solutions d\'étanchéité pour toitures, terrasses et sous-sols.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pour tous vos projets 
            de construction, rénovation et aménagement.
          </p>
        </div>
      </section>

      {/* Services Principaux */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Caractéristiques */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    Ce que nous proposons :
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center space-x-2">
                  <span>En savoir plus</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processus de Travail */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-4">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Une méthode éprouvée pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices[0].process.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center relative"
              >
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {step}
                </h3>
                {index < mainServices[0].process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Additionnels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-4">
              Services Complémentaires
            </h2>
            <p className="text-xl text-neutral-600">
              Des services spécialisés pour compléter vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-neutral-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Nos Garanties
            </h2>
            <p className="text-xl text-primary-100">
              Votre tranquillité d'esprit est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Garantie Décennale
              </h3>
              <p className="text-primary-100 text-sm">
                Protection complète pendant 10 ans
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Qualité Certifiée
              </h3>
              <p className="text-primary-100 text-sm">
                Matériaux et travaux certifiés
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Respect des Délais
              </h3>
              <p className="text-primary-100 text-sm">
                Livraison dans les temps convenus
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Suivi Post-Livraison
              </h3>
              <p className="text-primary-100 text-sm">
                Accompagnement après réception
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors duration-300">
              Demander un devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-secondary-600 transition-all duration-300">
              Nous appeler
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;