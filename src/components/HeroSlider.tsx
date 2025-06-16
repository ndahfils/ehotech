import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images de maisons modernes inspirées de la page Facebook TP N'SIKAN
  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Villa Moderne Cocody',
      subtitle: 'Projet Résidentiel 2024',
      description: 'Construction d\'une villa contemporaine de 300m² avec piscine et jardin paysager. Un projet qui allie modernité et confort familial.',
      location: 'Cocody, Abidjan',
      year: '2024'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Résidence Familiale Yopougon',
      subtitle: 'Rénovation Complète 2023',
      description: 'Transformation totale d\'une maison familiale avec extension et modernisation des espaces de vie.',
      location: 'Yopougon, Abidjan',
      year: '2023'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Complexe Résidentiel Marcory',
      subtitle: 'Construction Neuve 2024',
      description: 'Développement d\'un complexe de 12 villas modernes avec espaces communs et sécurité intégrée.',
      location: 'Marcory, Abidjan',
      year: '2024'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Maison Contemporaine Plateau',
      subtitle: 'Architecture Moderne 2023',
      description: 'Conception et réalisation d\'une maison d\'architecte alliant design contemporain et fonctionnalité.',
      location: 'Plateau, Abidjan',
      year: '2023'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Changement toutes les 7 secondes

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Image de fond avec overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>

              {/* Contenu */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      {/* Badge de localisation */}
                      <div className="inline-flex items-center bg-primary-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        {slide.location} • {slide.year}
                      </div>

                      {/* Titre principal */}
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h1>

                      {/* Sous-titre */}
                      <h2 className="text-xl md:text-3xl text-primary-300 font-medium mb-6">
                        {slide.subtitle}
                      </h2>

                      {/* Description */}
                      <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>

                      {/* Boutons d'action */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                          Découvrir ce projet
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-neutral-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                        >
                          <Play className="h-5 w-5" />
                          <span>Voir la vidéo</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary-500 w-12 h-3' 
                : 'bg-white/50 hover:bg-white/70 w-3 h-3'
            } rounded-full`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-8 z-20 text-white"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Défiler</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </motion.div>

      {/* Informations du projet en cours */}
      <div className="absolute bottom-20 left-8 z-20 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
        <div className="text-sm font-medium mb-1">Projet en cours</div>
        <div className="text-lg font-semibold">{slides[currentSlide].title}</div>
        <div className="text-sm opacity-80">{slides[currentSlide].location}</div>
      </div>
    </div>
  );
};

export default HeroSlider;