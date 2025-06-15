import React, { useState, useEffect } from 'react';
import { Save, Edit3, Plus, Trash2, Upload, Eye, Settings, Home, Users, Building2, Mail, Phone, MapPin } from 'lucide-react';

interface ContentData {
  home: {
    hero_title: string;
    hero_subtitle: string;
    years_experience: number;
    projects_completed: number;
    client_satisfaction: number;
  };
  about: {
    section_title: string;
    main_description: string;
    secondary_description: string;
    mission: string;
    vision: string;
    director_name: string;
    director_position: string;
  };
  contact: {
    address: string;
    phone_primary: string;
    phone_secondary: string;
    email_primary: string;
    email_secondary: string;
    hours: string;
  };
  settings: {
    company_name: string;
    logo: string;
    tagline: string;
    primary_color: string;
    secondary_color: string;
    facebook_url: string;
    linkedin_url: string;
    twitter_url: string;
  };
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  // Simuler le chargement des données
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Simuler un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Charger les données depuis les fichiers JSON existants
        const homeData = await import('../data/home.json');
        const aboutData = await import('../data/about.json');
        const contactData = await import('../data/contact.json');
        const settingsData = await import('../data/settings.json');

        setContent({
          home: homeData.default,
          about: aboutData.default,
          contact: contactData.default,
          settings: settingsData.default
        });
      } catch (error) {
        console.error('Erreur lors du chargement:', error);
        // Données par défaut en cas d'erreur
        setContent({
          home: {
            hero_title: "Excellence en Construction & Travaux Publics",
            hero_subtitle: "TP N'SIKAN PROJET ESPOIR, votre partenaire de confiance pour tous vos projets de construction et d'aménagement en Côte d'Ivoire.",
            years_experience: 15,
            projects_completed: 200,
            client_satisfaction: 100
          },
          about: {
            section_title: "À Propos de TP N'SIKAN",
            main_description: "Depuis plus de 15 ans, TP N'SIKAN PROJET ESPOIR s'impose comme un acteur majeur du secteur de la construction et des travaux publics en Côte d'Ivoire.",
            secondary_description: "Notre entreprise s'est bâtie sur des valeurs solides : l'excellence, la qualité, l'innovation et le respect des délais.",
            mission: "Fournir des services de construction et de travaux publics de haute qualité, en respectant les délais et les budgets.",
            vision: "Devenir la référence en matière de construction et de travaux publics en Afrique de l'Ouest.",
            director_name: "Koffi Diabaté",
            director_position: "Directeur Général"
          },
          contact: {
            address: "Abidjan, Cocody Riviera Golf\nRue des Jardins, Lot 247\nCôte d'Ivoire",
            phone_primary: "+225 07 07 07 07 07",
            phone_secondary: "+225 05 05 05 05 05",
            email_primary: "contact@tpnsikan.com",
            email_secondary: "info@tpnsikan.com",
            hours: "Lundi - Vendredi: 8h00 - 18h00\nSamedi: 8h00 - 12h00"
          },
          settings: {
            company_name: "TP N'SIKAN PROJET ESPOIR",
            logo: "/logo tp n'sikan.png",
            tagline: "Votre partenaire de confiance en construction",
            primary_color: "#991b1b",
            secondary_color: "#22c55e",
            facebook_url: "",
            linkedin_url: "",
            twitter_url: ""
          }
        });
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Simuler la sauvegarde
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage('✅ Contenu sauvegardé avec succès !');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('❌ Erreur lors de la sauvegarde');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateContent = (section: keyof ContentData, field: string, value: any) => {
    if (!content) return;
    
    setContent({
      ...content,
      [section]: {
        ...content[section],
        [field]: value
      }
    });
  };

  const tabs = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'about', label: 'À Propos', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'settings', label: 'Paramètres', icon: Settings }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de l'interface d'administration...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Erreur lors du chargement des données</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Building2 className="text-red-800" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Administration TP N'SIKAN</h1>
                <p className="text-sm text-gray-500">Interface de gestion du contenu</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {message && (
                <div className="px-4 py-2 rounded-lg bg-green-100 text-green-800 text-sm">
                  {message}
                </div>
              )}
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sauvegarde...</span>
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    <span>Sauvegarder</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === tab.id
                      ? 'bg-red-800 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            {activeTab === 'home' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Page d'Accueil</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Titre Principal
                    </label>
                    <input
                      type="text"
                      value={content.home.hero_title}
                      onChange={(e) => updateContent('home', 'hero_title', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sous-titre
                    </label>
                    <textarea
                      value={content.home.hero_subtitle}
                      onChange={(e) => updateContent('home', 'hero_subtitle', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Années d'Expérience
                      </label>
                      <input
                        type="number"
                        value={content.home.years_experience}
                        onChange={(e) => updateContent('home', 'years_experience', parseInt(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Projets Réalisés
                      </label>
                      <input
                        type="number"
                        value={content.home.projects_completed}
                        onChange={(e) => updateContent('home', 'projects_completed', parseInt(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Clients Satisfaits (%)
                      </label>
                      <input
                        type="number"
                        value={content.home.client_satisfaction}
                        onChange={(e) => updateContent('home', 'client_satisfaction', parseInt(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">À Propos</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Titre de Section
                    </label>
                    <input
                      type="text"
                      value={content.about.section_title}
                      onChange={(e) => updateContent('about', 'section_title', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description Principale
                    </label>
                    <textarea
                      value={content.about.main_description}
                      onChange={(e) => updateContent('about', 'main_description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description Secondaire
                    </label>
                    <textarea
                      value={content.about.secondary_description}
                      onChange={(e) => updateContent('about', 'secondary_description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mission
                      </label>
                      <textarea
                        value={content.about.mission}
                        onChange={(e) => updateContent('about', 'mission', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vision
                      </label>
                      <textarea
                        value={content.about.vision}
                        onChange={(e) => updateContent('about', 'vision', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom du Directeur
                      </label>
                      <input
                        type="text"
                        value={content.about.director_name}
                        onChange={(e) => updateContent('about', 'director_name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Poste du Directeur
                      </label>
                      <input
                        type="text"
                        value={content.about.director_position}
                        onChange={(e) => updateContent('about', 'director_position', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline mr-2" size={16} />
                      Adresse
                    </label>
                    <textarea
                      value={content.contact.address}
                      onChange={(e) => updateContent('contact', 'address', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline mr-2" size={16} />
                        Téléphone Principal
                      </label>
                      <input
                        type="tel"
                        value={content.contact.phone_primary}
                        onChange={(e) => updateContent('contact', 'phone_primary', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline mr-2" size={16} />
                        Téléphone Secondaire
                      </label>
                      <input
                        type="tel"
                        value={content.contact.phone_secondary}
                        onChange={(e) => updateContent('contact', 'phone_secondary', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline mr-2" size={16} />
                        Email Principal
                      </label>
                      <input
                        type="email"
                        value={content.contact.email_primary}
                        onChange={(e) => updateContent('contact', 'email_primary', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline mr-2" size={16} />
                        Email Secondaire
                      </label>
                      <input
                        type="email"
                        value={content.contact.email_secondary}
                        onChange={(e) => updateContent('contact', 'email_secondary', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horaires d'Ouverture
                    </label>
                    <textarea
                      value={content.contact.hours}
                      onChange={(e) => updateContent('contact', 'hours', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Paramètres Généraux</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l'Entreprise
                    </label>
                    <input
                      type="text"
                      value={content.settings.company_name}
                      onChange={(e) => updateContent('settings', 'company_name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slogan
                    </label>
                    <input
                      type="text"
                      value={content.settings.tagline}
                      onChange={(e) => updateContent('settings', 'tagline', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Couleur Principale
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={content.settings.primary_color}
                          onChange={(e) => updateContent('settings', 'primary_color', e.target.value)}
                          className="w-12 h-12 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="text"
                          value={content.settings.primary_color}
                          onChange={(e) => updateContent('settings', 'primary_color', e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Couleur Secondaire
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={content.settings.secondary_color}
                          onChange={(e) => updateContent('settings', 'secondary_color', e.target.value)}
                          className="w-12 h-12 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="text"
                          value={content.settings.secondary_color}
                          onChange={(e) => updateContent('settings', 'secondary_color', e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Réseaux Sociaux</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Facebook URL
                        </label>
                        <input
                          type="url"
                          value={content.settings.facebook_url}
                          onChange={(e) => updateContent('settings', 'facebook_url', e.target.value)}
                          placeholder="https://facebook.com/votre-page"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LinkedIn URL
                        </label>
                        <input
                          type="url"
                          value={content.settings.linkedin_url}
                          onChange={(e) => updateContent('settings', 'linkedin_url', e.target.value)}
                          placeholder="https://linkedin.com/company/votre-entreprise"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Twitter URL
                        </label>
                        <input
                          type="url"
                          value={content.settings.twitter_url}
                          onChange={(e) => updateContent('settings', 'twitter_url', e.target.value)}
                          placeholder="https://twitter.com/votre-compte"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;