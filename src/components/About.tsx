import React from 'react';
import { Target, Eye, Award, Users, CheckCircle } from 'lucide-react';

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

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              À Propos de <span className="text-red-800">TP N'SIKAN</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Depuis plus de 15 ans, TP N'SIKAN PROJET ESPOIR s'impose comme un acteur majeur 
              du secteur de la construction et des travaux publics en Côte d'Ivoire.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Notre entreprise s'est bâtie sur des valeurs solides : l'excellence, la qualité, 
              l'innovation et le respect des délais. Nous accompagnons nos clients dans la 
              réalisation de leurs projets les plus ambitieux, qu'il s'agisse de constructions 
              résidentielles, commerciales ou d'infrastructures publiques.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
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

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-red-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Fournir des services de construction et de travaux publics de haute qualité, 
              en respectant les délais et les budgets, tout en contribuant au développement 
              durable de la Côte d'Ivoire.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Devenir la référence en matière de construction et de travaux publics en Afrique 
              de l'Ouest, reconnue pour son expertise, son innovation et son engagement 
              envers l'excellence.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos <span className="text-red-800">Valeurs</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;