import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSlider from '../components/HeroSlider';
import { Building, Wrench, Palette, Shield, Users, Award, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';

const Home = () => {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Building,
      title: 'Construction Neuve',
      description: 'Conception et réalisation de maisons individuelles et bâtiments selon vos besoins spécifiques.',
      features: ['Plans personnalisés', 'Matériaux de qualité', 'Respect des délais', 'Garantie décennale'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Wrench,
      title: 'Rénovation',
      description: 'Modernisation et amélioration de vos espaces existants avec des solutions innovantes.',
      features: ['Diagnostic complet', 'Solutions innovantes', 'Finitions soignées', 'Mise aux normes'],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Palette,
      title: 'Aménagement',
      description: 'Création d\'espaces fonctionnels et esthétiques pour votre confort optimal.',
      features: ['Design sur mesure', 'Optimisation d\'espace', 'Décoration intégrée', 'Mobilier personnalisé'],
      color: 'from-neutral-600 to-neutral-700'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projets réalisés', icon: Building },
    { number: '15', label: 'Années d\'expérience', icon: Award },
    { number: '98%', label: 'Clients satisfaits', icon: Users },
    { number: '24/7', label: 'Support client', icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Marie Kouassi',
      role: 'Propriétaire - Villa Cocody',
      content: 'TP N\'SIKAN a transformé notre rêve en réalité. Une équipe professionnelle, à l\'écoute et d\'une qualité irréprochable. Je recommande vivement !',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Jean-Baptiste Yao',
      role: 'Chef d\'entreprise',
      content: 'Excellent travail pour la construction de nos bureaux. Respect des délais, qualité exceptionnelle et équipe très professionnelle.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Fatou Traoré',
      role: 'Architecte partenaire',
      content: 'Une collaboration parfaite sur plusieurs projets. Leur expertise technique et leur sens du détail font la différence.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Section À propos rapide */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Qui sommes-nous ?
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
                Votre partenaire de confiance depuis 
                <span className="text-primary-600"> 15 ans</span>
              </h2>
              
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                <strong className="text-primary-600">TP N'SIKAN PROJET ESPOIR</strong> est une entreprise 
                ivoirienne spécialisée dans la construction, la rénovation et l'aménagement. 
                Nous transformons vos rêves en réalité avec expertise, passion et innovation.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Équipe de 25+ professionnels qualifiés',
                  'Matériaux de première qualité certifiés',
                  'Respect strict des délais et budgets',
                  'Garantie décennale sur tous nos travaux'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Découvrir notre histoire</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Équipe TP N'SIKAN au travail"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">15+</div>
                      <div className="text-sm text-neutral-600">Années d'expertise</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Nos Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-6">
              Excellence dans chaque 
              <span className="text-primary-600"> projet</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services pour tous vos projets de construction et d'aménagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>En savoir plus</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Témoignages
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-6">
              Ce que disent nos 
              <span className="text-primary-600"> clients</span>
            </h2>
            <p className="text-xl text-neutral-600">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 via-secondary-700 to-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Prêt à démarrer votre 
              <span className="text-yellow-300"> projet ?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
              Notre équipe d'experts est là pour vous accompagner à chaque étape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Demander un devis</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-secondary-600 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Nous appeler</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;