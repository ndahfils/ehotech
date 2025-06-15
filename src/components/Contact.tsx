import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Linkedin, Twitter } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contactez-<span className="text-red-800">Nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui pour une consultation gratuite 
            et découvrez comment nous pouvons vous aider à concrétiser vos ambitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-800 p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Abidjan, Cocody Riviera Golf<br />
                      Rue des Jardins, Lot 247<br />
                      Côte d'Ivoire
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-800 p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+225 07 07 07 07 07</p>
                    <p className="text-gray-600">+225 05 05 05 05 05</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-800 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@tpnsikan.com</p>
                    <p className="text-gray-600">info@tpnsikan.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-800 p-3 rounded-lg">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horaires</h4>
                    <p className="text-gray-600">Lundi - Vendredi: 8h00 - 18h00</p>
                    <p className="text-gray-600">Samedi: 8h00 - 12h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-blue-400 p-3 rounded-lg text-white hover:bg-blue-500 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Demande de Devis</h3>
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
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
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
                    <option value="construction">Construction</option>
                    <option value="renovation">Rénovation</option>
                    <option value="travaux-publics">Travaux Publics</option>
                    <option value="amenagement">Aménagement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="Décrivez votre projet en détail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
              >
                <span>Envoyer la Demande</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;