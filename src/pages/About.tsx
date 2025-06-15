import React from 'react';
import { Target, Eye, Award, Users, CheckCircle, Building, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies."
    },
    {
      icon: CheckCircle,
      title: "Qualité",
      description: "La qualité est au cœur de nos préoccupations, de la conception à la livraison finale."
    },
    {
      icon: Users,
      title: "Partenariat",
      description: "Nous construisons des relations durables basées sur la confiance et la transparence."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Nous adoptons les dernières innovations pour offrir des solutions modernes et durables."
    }
  ];

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "200+", label: "Projets réalisés" },
    { number: "50+", label: "Équipe d'experts" },
    { number: "100%", label: "Clients satisfaits" }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Création de l'entreprise",
      description: "Fondation de TP N'SIKAN PROJET ESPOIR par Koffi Diabaté avec une vision claire : devenir un acteur majeur de la construction en Côte d'Ivoire."
    },
    {
      year: "2012",
      title: "Premier grand projet",
      description: "Réalisation de notre premier complexe résidentiel de 25 logements à Cocody, marquant notre entrée dans les grands projets."
    },
    {
      year: "2015",
      title: "Expansion des services",
      description: "Diversification vers les travaux publics avec la réhabilitation de 15 km de routes rurales dans la région du Bélier."
    },
    {
      year: "2018",
      title: "Certification qualité",
      description: "Obtention de la certification ISO 9001 et agrément pour les marchés publics de grande envergure."
    },
    {
      year: "2021",
      title: "Innovation technologique",
      description: "Adoption des dernières technologies BIM et équipements de pointe pour optimiser nos processus de construction."
    },
    {
      year: "2024",
      title: "Leadership régional",
      description: "Reconnaissance comme l'une des entreprises de construction les plus fiables de Côte d'Ivoire avec plus de 200 projets réalisés."
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            À Propos de <span className="text-green-400">TP N'SIKAN</span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto">
            Depuis plus de 15 ans, TP N'SIKAN PROJET ESPOIR s'impose comme un acteur majeur 
            du secteur de la construction et des travaux publics en Côte d'Ivoire.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Notre <span className="text-red-800">Histoire</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Fondée en 2009 par Koffi Diabaté, TP N'SIKAN PROJET ESPOIR est née d'une vision ambitieuse : 
                contribuer au développement de la Côte d'Ivoire à travers des projets de construction d'excellence.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre entreprise s'est bâtie sur des valeurs solides : l'excellence, la qualité, 
                l'innovation et le respect des délais. Nous accompagnons nos clients dans la 
                réalisation de leurs projets les plus ambitieux, qu'il s'agisse de constructions 
                résidentielles, commerciales ou d'infrastructures publiques.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-red-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Équipe TP N'SIKAN"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-800 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">Koffi Diabaté</div>
                <div className="text-red-200">Directeur Général</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="bg-red-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fournir des services de construction et de travaux publics de haute qualité, 
                en respectant les délais et les budgets, tout en contribuant au développement 
                durable de la Côte d'Ivoire.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Excellence dans l'exécution
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Respect des délais
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Développement durable
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Devenir la référence en matière de construction et de travaux publics en Afrique 
                de l'Ouest, reconnue pour son expertise, son innovation et son engagement 
                envers l'excellence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Leadership régional
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Innovation continue
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Excellence reconnue
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Notre <span className="text-red-800">Parcours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les étapes clés qui ont marqué l'évolution de TP N'SIKAN PROJET ESPOIR
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-800"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-red-800 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-red-800 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Nos <span className="text-red-800">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre action quotidienne et notre engagement envers nos clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Notre Équipe</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Une équipe de professionnels expérimentés et passionnés, unis par la même vision de l'excellence
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <Building className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-2xl font-bold mb-2">Architectes</h3>
              <p className="text-red-200">Conception et design innovants</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <Users className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-2xl font-bold mb-2">Ingénieurs</h3>
              <p className="text-red-200">Expertise technique de pointe</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <Award className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-2xl font-bold mb-2">Artisans</h3>
              <p className="text-red-200">Savoir-faire traditionnel et moderne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Rejoignez Notre Histoire</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise et notre passion pour donner vie à vos projets les plus ambitieux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Découvrir Nos Services
            </button>
            <button className="border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;