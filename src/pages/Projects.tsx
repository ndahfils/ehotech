import React, { useState } from 'react';
import { Calendar, MapPin, User, ArrowRight, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const categories = [
    { id: 'tous', name: 'Tous les projets' },
    { id: 'construction', name: 'Construction neuve' },
    { id: 'renovation', name: 'Rénovation' },
    { id: 'amenagement', name: 'Aménagement' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Villa Moderne Cocody',
      category: 'construction',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Cocody, Abidjan',
      date: '2024',
      client: 'Famille Kouassi',
      description: 'Construction d\'une villa moderne de 250m² avec piscine et jardin paysager.',
      features: ['4 chambres', 'Piscine', 'Garage double', 'Jardin paysager'],
      duration: '8 mois',
      budget: '85M FCFA'
    },
    {
      id: 2,
      title: 'Rénovation Maison Coloniale',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Plateau, Abidjan',
      date: '2023',
      client: 'M. Diabaté',
      description: 'Rénovation complète d\'une maison coloniale avec conservation du cachet historique.',
      features: ['Rénovation énergétique', 'Mise aux normes', 'Conservation patrimoine', 'Modernisation'],
      duration: '6 mois',
      budget: '45M FCFA'
    },
    {
      id: 3,
      title: 'Aménagement Bureau Moderne',
      category: 'amenagement',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Zone 4, Abidjan',
      date: '2024',
      client: 'Entreprise TechCorp',
      description: 'Aménagement d\'espaces de bureaux modernes pour 50 employés.',
      features: ['Open space', 'Salles de réunion', 'Espace détente', 'Éclairage LED'],
      duration: '3 mois',
      budget: '25M FCFA'
    },
    {
      id: 4,
      title: 'Résidence Familiale Yopougon',
      category: 'construction',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Yopougon, Abidjan',
      date: '2023',
      client: 'Famille Traoré',
      description: 'Construction d\'une résidence familiale avec architecture contemporaine.',
      features: ['5 chambres', 'Terrasse', 'Cuisine américaine', 'Buanderie'],
      duration: '10 mois',
      budget: '65M FCFA'
    },
    {
      id: 5,
      title: 'Rénovation Appartement Standing',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Marcory, Abidjan',
      date: '2024',
      client: 'Mme Bamba',
      description: 'Rénovation complète d\'un appartement de standing avec design contemporain.',
      features: ['Design moderne', 'Domotique', 'Matériaux haut de gamme', 'Optimisation espace'],
      duration: '4 mois',
      budget: '35M FCFA'
    },
    {
      id: 6,
      title: 'Aménagement Restaurant',
      category: 'amenagement',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Treichville, Abidjan',
      date: '2023',
      client: 'Restaurant Le Palmier',
      description: 'Aménagement complet d\'un restaurant avec cuisine professionnelle.',
      features: ['Cuisine pro', 'Salle 80 couverts', 'Terrasse', 'Décoration thématique'],
      duration: '5 mois',
      budget: '40M FCFA'
    }
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets les plus remarquables et 
            laissez-vous inspirer pour votre futur projet.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-neutral-600">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filtrer par :</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des projets */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <MapPin className="h-4 w-4 text-primary-600" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <Calendar className="h-4 w-4 text-primary-600" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <User className="h-4 w-4 text-primary-600" />
                      <span>{project.client}</span>
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-neutral-700">Durée:</span>
                      <span className="text-sm text-neutral-600">{project.duration}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-neutral-700">Budget:</span>
                      <span className="text-sm font-semibold text-primary-600">{project.budget}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-xs text-neutral-500">
                        +{project.features.length - 3} autres
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Voir les détails</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques des projets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-4">
              Nos Réalisations en Chiffres
            </h2>
            <p className="text-xl text-neutral-600">
              Des projets variés qui témoignent de notre expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-neutral-600">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-neutral-600">Construction neuve</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">12</div>
              <div className="text-neutral-600">Mois délai moyen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-neutral-600">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-neutral-600">
              Leurs témoignages sont notre plus belle récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 italic text-lg">
                "TP N'SIKAN a réalisé la maison de nos rêves. L'équipe est professionnelle, 
                à l'écoute et respecte les délais. Je recommande vivement !"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-neutral-900">Marie Kouassi</div>
                  <div className="text-sm text-neutral-600">Villa Moderne Cocody</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 italic text-lg">
                "Excellent travail de rénovation ! Ils ont su préserver le charme 
                de ma maison coloniale tout en la modernisant. Parfait !"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-neutral-900">Koffi Diabaté</div>
                  <div className="text-sm text-neutral-600">Rénovation Maison Coloniale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Votre Projet Sera le Prochain
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et concrétisez votre projet avec notre équipe d'experts.
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors duration-300">
            Démarrer mon projet
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;