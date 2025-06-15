import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Filter, Search } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: "Complexe Résidentiel Les Palmiers",
      category: "Résidentiel",
      location: "Abidjan, Cocody",
      year: "2023",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction d'un complexe résidentiel moderne de 50 logements avec espaces verts et équipements communautaires.",
      details: "Ce projet ambitieux comprend 50 logements de standing répartis sur 3 bâtiments, avec piscine, aire de jeux pour enfants, parking souterrain et espaces verts paysagers. Livré en 18 mois.",
      surface: "5,000 m²",
      budget: "2.5 milliards FCFA"
    },
    {
      title: "Centre Commercial Plateau",
      category: "Commercial",
      location: "Abidjan, Plateau",
      year: "2023",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Réalisation d'un centre commercial moderne avec parking souterrain et espaces de restauration.",
      details: "Centre commercial de 3 niveaux avec 80 boutiques, food court, cinéma et parking de 200 places. Architecture moderne avec façade en verre et acier.",
      surface: "8,000 m²",
      budget: "4.2 milliards FCFA"
    },
    {
      title: "Route Nationale RN7",
      category: "Travaux Publics",
      location: "Yamoussoukro - Bouaké",
      year: "2022",
      image: "https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Réhabilitation de 25 km de route nationale avec amélioration du drainage et de la signalisation.",
      details: "Réfection complète de la chaussée, création de nouveaux ouvrages de drainage, installation de signalisation moderne et éclairage LED sur les traversées d'agglomération.",
      surface: "25 km",
      budget: "8.5 milliards FCFA"
    },
    {
      title: "Hôpital Général de Bouaké",
      category: "Santé",
      location: "Bouaké",
      year: "2022",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Extension et modernisation de l'hôpital avec nouveaux équipements médicaux et blocs opératoires.",
      details: "Extension de 3,000 m² comprenant 2 nouveaux blocs opératoires, service de réanimation, laboratoire d'analyses et modernisation complète des installations existantes.",
      surface: "3,000 m²",
      budget: "3.8 milliards FCFA"
    },
    {
      title: "École Primaire Sainte-Marie",
      category: "Éducation",
      location: "Grand-Bassam",
      year: "2021",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction d'une école primaire moderne avec 12 salles de classe, bibliothèque et terrain de sport.",
      details: "École de 12 classes avec bibliothèque, salle informatique, cantine, terrain de sport multisports et aire de jeux. Capacité d'accueil de 400 élèves.",
      surface: "2,500 m²",
      budget: "1.2 milliards FCFA"
    },
    {
      title: "Pont de la Comoé",
      category: "Infrastructure",
      location: "Abengourou",
      year: "2021",
      image: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction d'un pont moderne de 150m facilitant la circulation entre les deux rives de la Comoé.",
      details: "Pont à poutres en béton précontraint de 150m de long, 12m de large, avec voies piétonnes et éclairage LED. Résistance aux crues centennales.",
      surface: "150 m",
      budget: "2.8 milliards FCFA"
    },
    {
      title: "Résidence Les Jardins",
      category: "Résidentiel",
      location: "Abidjan, Riviera",
      year: "2021",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Résidence haut de gamme de 24 villas avec piscines privées et jardins paysagers.",
      details: "24 villas de luxe de 200 à 350 m² chacune, avec piscines privées, jardins paysagers, système de sécurité intégré et club house communautaire.",
      surface: "12,000 m²",
      budget: "6.5 milliards FCFA"
    },
    {
      title: "Usine Agroalimentaire SANIA",
      category: "Industriel",
      location: "San Pedro",
      year: "2020",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction d'une usine de transformation agroalimentaire avec équipements industriels.",
      details: "Usine de transformation de cacao et café avec lignes de production automatisées, laboratoire de contrôle qualité, entrepôts frigorifiques et bureaux administratifs.",
      surface: "4,500 m²",
      budget: "5.2 milliards FCFA"
    }
  ];

  const categories = ['Tous', 'Résidentiel', 'Commercial', 'Travaux Publics', 'Santé', 'Éducation', 'Infrastructure', 'Industriel'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'Tous' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Nos <span className="text-green-400">Réalisations</span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto">
            Découvrez notre portfolio de projets réalisés qui témoignent de notre expertise 
            et de notre engagement envers l'excellence dans tous les secteurs.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-600" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === category
                        ? 'bg-red-800 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin size={16} className="mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {project.year}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                      <span><strong>Surface:</strong> {project.surface}</span>
                      <span><strong>Budget:</strong> {project.budget}</span>
                    </div>
                    
                    <button className="w-full flex items-center justify-center text-red-800 hover:text-red-900 font-semibold transition-colors bg-red-50 hover:bg-red-100 py-2 rounded-lg">
                      <span>Voir les détails</span>
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Aucun projet trouvé pour les critères sélectionnés.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-red-200">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-red-200">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-red-200">Équipe d'Experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-red-200">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Votre projet sera le prochain ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et confiez-nous la réalisation de votre projet. 
            Notre expertise est à votre service pour concrétiser vos ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Demander un Devis
            </button>
            <button className="border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Voir Nos Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;