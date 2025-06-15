import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contactez-<span className="text-green-400">Nous</span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto">
            Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui pour une consultation gratuite 
            et découvrez comment nous pouvons vous aider à concrétiser vos ambitions.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="bg-red-800 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Appelez-nous</h3>
              <p className="text-gray-600 mb-4">Disponible du lundi au samedi</p>
              <div className="space-y-2">
                <p className="font-semibold text-red-800">+225 07 07 07 07 07</p>
                <p className="font-semibold text-red-800">+225 05 05 05 05 05</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Écrivez-nous</h3>
              <p className="text-gray-600 mb-4">Réponse sous 24h</p>
              <div className="space-y-2">
                <p className="font-semibold text-green-600">contact@tpnsikan.com</p>
                <p className="font-semibold text-green-600">info@tpnsikan.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visitez-nous</h3>
              <p className="text-gray-600 mb-4">Notre siège social</p>
              <div className="space-y-1">
                <p className="font-semibold text-blue-600">Abidjan, Cocody</p>
                <p className="text-sm text-gray-600">Riviera Golf, Rue des Jardins</p>
                <p className="text-sm text-gray-600">Lot 247</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="bg-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Chat en ligne</h3>
              <p className="text-gray-600 mb-4">Support instantané</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-all">
                Démarrer le chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Informations Détaillées</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="bg-red-800 p-3 rounded-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Adresse Complète</h4>
                      <p className="text-gray-600">
                        Abidjan, Cocody Riviera Golf<br />
                        Rue des Jardins, Lot 247<br />
                        08 BP 2847 Abidjan 08<br />
                        Côte d'Ivoire
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="bg-red-800 p-3 rounded-lg">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Horaires d'Ouverture</h4>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>Lundi - Vendredi:</strong> 8h00 - 18h00</p>
                        <p><strong>Samedi:</strong> 8h00 - 12h00</p>
                        <p><strong>Dimanche:</strong> Fermé</p>
                        <p className="text-sm text-red-600 mt-2">* Urgences 24h/7j</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="bg-red-800 p-3 rounded-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Numéros de Téléphone</h4>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>Standard:</strong> +225 07 07 07 07 07</p>
                        <p><strong>Commercial:</strong> +225 05 05 05 05 05</p>
                        <p><strong>Urgences:</strong> +225 01 01 01 01 01</p>
                        <p><strong>WhatsApp:</strong> +225 07 07 07 07 07</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-nous sur les Réseaux</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 p-4 rounded-lg text-white hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="bg-blue-500 p-4 rounded-lg text-white hover:bg-blue-600 transition-colors flex items-center space-x-2">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="bg-blue-400 p-4 rounded-lg text-white hover:bg-blue-500 transition-colors flex items-center space-x-2">
                    <Twitter size={20} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Demande de Devis Gratuit</h2>
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire et nous vous recontacterons dans les 24 heures pour discuter de votre projet.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="+225 XX XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="construction">Construction Neuve</option>
                      <option value="renovation">Rénovation</option>
                      <option value="travaux-publics">Travaux Publics</option>
                      <option value="amenagement">Aménagement Intérieur</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="etude">Étude & Conseil</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Description détaillée du projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    placeholder="Décrivez votre projet en détail : localisation, superficie, budget approximatif, délais souhaités, spécifications particulières..."
                  ></textarea>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Conseil :</strong> Plus votre description est détaillée, plus notre devis sera précis et adapté à vos besoins.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                >
                  <span>Envoyer ma Demande</span>
                  <Send size={20} />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe commerciale.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Localisation</h2>
            <p className="text-xl text-gray-600">
              Venez nous rendre visite dans nos bureaux à Cocody Riviera Golf
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-red-800" size={48} />
                <p className="text-gray-600">Carte interactive disponible</p>
                <p className="text-sm text-gray-500">Abidjan, Cocody Riviera Golf - Rue des Jardins, Lot 247</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-3">Combien de temps pour un devis ?</h3>
              <p className="text-gray-600">Nous vous fournissons un devis détaillé sous 48 à 72 heures après la visite technique.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-3">Proposez-vous un financement ?</h3>
              <p className="text-gray-600">Oui, nous avons des partenariats avec plusieurs institutions financières pour faciliter vos projets.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-3">Quelle est votre zone d'intervention ?</h3>
              <p className="text-gray-600">Nous intervenons sur tout le territoire ivoirien, avec une expertise particulière sur Abidjan.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-3">Offrez-vous une garantie ?</h3>
              <p className="text-gray-600">Tous nos travaux sont couverts par une garantie décennale et nous assurons un suivi post-livraison.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;