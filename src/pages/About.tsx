import React from 'react';
import { Users, Award, Target, Heart, CheckCircle, Calendar } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en utilisant les meilleures pratiques et matériaux.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour la construction nous pousse à créer des espaces exceptionnels.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour réaliser leur vision.'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'La qualité est au cœur de tout ce que nous faisons, de la conception à la livraison.'
    }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Création de l\'entreprise',
      description: 'Fondation de TP N\'SIKAN PROJET ESPOIR avec une vision claire : offrir des services de construction de qualité.'
    },
    {
      year: '2012',
      title: 'Expansion des services',
      description: 'Élargissement de notre gamme de services pour inclure la rénovation et l\'aménagement intérieur.'
    },
    {
      year: '2016',
      title: '100 projets réalisés',
      description: 'Franchissement du cap des 100 projets réalisés avec succès, consolidant notre réputation.'
    },
    {
      year: '2020',
      title: 'Innovation technologique',
      description: 'Intégration de nouvelles technologies et méthodes de construction durables.'
    },
    {
      year: '2024',
      title: 'Leader régional',
      description: 'Reconnaissance comme l\'un des leaders de la construction en Côte d\'Ivoire.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            À Propos de TP N'SIKAN
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Découvrez l'histoire, les valeurs et l'expertise qui font de nous 
            votre partenaire de confiance pour tous vos projets de construction.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Fondée en 2009, <strong className="text-primary-600">TP N'SIKAN PROJET ESPOIR</strong> 
                est née de la vision de créer une entreprise de construction qui allie expertise technique, 
                innovation et service client exceptionnel.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Au fil des années, nous avons développé une expertise reconnue dans la construction 
                de maisons individuelles, la rénovation de bâtiments et l'aménagement d'espaces. 
                Notre équipe de professionnels qualifiés partage la même passion pour l'excellence 
                et l'innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  <span className="text-neutral-700">Plus de 15 ans d'expérience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  <span className="text-neutral-700">150+ projets réalisés avec succès</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  <span className="text-neutral-700">Équipe de 25+ professionnels</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Histoire TP N'SIKAN"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Les valeurs qui guident notre travail et nos relations avec nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-neutral-600">
              Les étapes clés de notre développement
            </p>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="h-5 w-5 text-primary-600" />
                        <span className="text-primary-600 font-bold text-lg">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Point central */}
                  <div className="relative z-10 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Une équipe de professionnels passionnés et expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Directeur"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  N'Sikan Kouakou
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Directeur Général
                </p>
                <p className="text-neutral-600 text-sm">
                  Ingénieur en génie civil avec plus de 20 ans d'expérience dans la construction.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Chef de projet"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Marie Diabaté
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Chef de Projet
                </p>
                <p className="text-neutral-600 text-sm">
                  Architecte spécialisée dans la conception de maisons modernes et durables.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Responsable technique"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Yao Koffi
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Responsable Technique
                </p>
                <p className="text-neutral-600 text-sm">
                  Expert en rénovation et aménagement avec une expertise en nouvelles technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise et notre passion peuvent donner vie à vos projets.
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors duration-300">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;