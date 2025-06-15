import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Complexe Résidentiel Les Palmiers",
      category: "Résidentiel",
      location: "Abidjan, Cocody",
      year: "2023",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction d'un complexe résidentiel moderne de 50 logements avec espaces verts et équipements communautaires."
    },
    {
      title: "Centre Commercial Plateau",
      category: "Commercial",
      location: "Abidjan, Plateau",
      year: "2023",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Réalisation d'un centre commercial moderne avec parking souterrain et espaces de restauration."
    },
    {
      title: "Route Nationale RN7",
      category: "Travaux Publics",
      location: "Yamoussoukro - Bouaké",
      year: "2022",
      image: "https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Réhabilitation de 25 km de route nationale avec amélioration du drainage et de la signalisation."
    },
    {
      title: "Hôpital Général de Bouaké",
      category: "Santé",
      location: "Bouaké",
      year: "2022",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Extension et modernisation de l'hôpital avec nouveaux équipements médicaux et blocs opératoires."
    },
    {
      title: "École Primaire Sainte-Marie",
      category: "Éducation",
      location: "Grand-Bassam",
      year: "2021",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction d'une école primaire moderne avec 12 salles de classe, bibliothèque et terrain de sport."
    },
    {
      title: "Pont de la Comoé",
      category: "Infrastructure",
      location: "Abengourou",
      year: "2021",
      image: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction d'un pont moderne de 150m facilitant la circulation entre les deux rives de la Comoé."
    }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nos <span className="text-red-800">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets les plus emblématiques qui témoignent 
            de notre expertise et de notre engagement envers l'excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                
                <button className="flex items-center text-red-800 hover:text-red-900 font-semibold transition-colors">
                  <span>Voir plus</span>
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;