import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    typeProjet: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        typeProjet: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+225 XX XX XX XX XX', '+225 YY YY YY YY YY'],
      description: 'Appelez-nous du lundi au vendredi de 8h à 18h'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@tpnsikan.com', 'devis@tpnsikan.com'],
      description: 'Nous répondons sous 24h maximum'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Abidjan, Côte d\'Ivoire', 'Zone industrielle'],
      description: 'Venez nous rencontrer sur rendez-vous'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h - 18h', 'Sam: 8h - 12h'],
      description: 'Urgences 24h/7j sur appel'
    }
  ];

  const services = [
    'Construction neuve',
    'Rénovation',
    'Aménagement intérieur',
    'Extension',
    'Maçonnerie',
    'Électricité',
    'Autre'
  ];

  const budgetRanges = [
    'Moins de 10M FCFA',
    '10M - 25M FCFA',
    '25M - 50M FCFA',
    '50M - 100M FCFA',
    'Plus de 100M FCFA',
    'À définir'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Notre équipe est là pour vous accompagner 
            et répondre à toutes vos questions.
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-neutral-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-neutral-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-neutral-600">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
                Demande de Devis Gratuit
              </h2>
              <p className="text-neutral-600 mb-8">
                Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais 
                pour discuter de votre projet.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-600 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-neutral-600">
                    Nous vous recontacterons dans les 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-neutral-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium text-neutral-700 mb-2">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Objet de votre demande"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="typeProjet" className="block text-sm font-medium text-neutral-700 mb-2">
                        Type de projet *
                      </label>
                      <select
                        id="typeProjet"
                        name="typeProjet"
                        required
                        value={formData.typeProjet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Décrivez votre projet en détail : localisation, surface, délais souhaités, spécificités..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Envoyer ma demande</span>
                  </button>

                  <p className="text-sm text-neutral-600 text-center">
                    * Champs obligatoires. Vos données sont protégées et ne seront pas partagées.
                  </p>
                </form>
              )}
            </div>

            {/* Informations complémentaires */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">Devis gratuit et détaillé</h4>
                      <p className="text-neutral-600 text-sm">Estimation précise sans engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">Équipe expérimentée</h4>
                      <p className="text-neutral-600 text-sm">Plus de 15 ans d'expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">Garantie qualité</h4>
                      <p className="text-neutral-600 text-sm">Garantie décennale sur tous nos travaux</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">Suivi personnalisé</h4>
                      <p className="text-neutral-600 text-sm">Accompagnement de A à Z</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-600 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Besoin d'une réponse rapide ?
                </h3>
                <p className="text-primary-100 mb-6">
                  Pour les urgences ou les questions simples, n'hésitez pas à nous appeler directement.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-200" />
                    <span className="font-semibold">+225 XX XX XX XX XX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary-200" />
                    <span>Lun - Ven: 8h - 18h</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Suivez-nous
                </h3>
                <p className="text-neutral-600 mb-6">
                  Découvrez nos dernières réalisations et actualités sur nos réseaux sociaux.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/tpnsikanprojetespoir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Notre Localisation
            </h2>
            <p className="text-xl text-neutral-600">
              Venez nous rencontrer dans nos bureaux à Abidjan
            </p>
          </div>
          
          <div className="bg-neutral-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
              <p className="text-neutral-600 text-lg">
                Carte interactive à intégrer
              </p>
              <p className="text-neutral-500 text-sm">
                Abidjan, Côte d'Ivoire
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;