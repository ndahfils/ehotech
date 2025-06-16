import React, { useState } from 'react';
import { Settings, Users, FileText, Image, MessageSquare, BarChart3 } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const adminSections = [
    { id: 'dashboard', name: 'Tableau de Bord', icon: BarChart3 },
    { id: 'content', name: 'Contenu', icon: FileText },
    { id: 'projects', name: 'Projets', icon: Image },
    { id: 'team', name: 'Équipe', icon: Users },
    { id: 'testimonials', name: 'Témoignages', icon: MessageSquare },
    { id: 'settings', name: 'Paramètres', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Admin */}
      <header className="bg-primary-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo tp n'sikan.png" 
                alt="TP N'SIKAN" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">Administration</h1>
                <p className="text-sm text-primary-200">TP N'SIKAN PROJET ESPOIR</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Administrateur</span>
              <button className="bg-primary-700 px-4 py-2 rounded-lg text-sm hover:bg-primary-800 transition-colors">
                Voir le Site
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-4">
            <ul className="space-y-2">
              {adminSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveTab(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === section.id
                        ? 'bg-primary-100 text-primary-700 border-r-4 border-primary-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <section.icon className="h-5 w-5" />
                    <span>{section.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Tableau de Bord</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Pages</p>
                        <p className="text-2xl font-semibold text-gray-900">5</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Image className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Projets</p>
                        <p className="text-2xl font-semibold text-gray-900">12</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Équipe</p>
                        <p className="text-2xl font-semibold text-gray-900">8</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <MessageSquare className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Témoignages</p>
                        <p className="text-2xl font-semibold text-gray-900">15</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                      <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-600">Ajouter un Projet</p>
                    </button>
                    <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                      <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-600">Ajouter un Membre</p>
                    </button>
                    <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                      <MessageSquare className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-600">Nouveau Témoignage</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'dashboard' && (
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {adminSections.find(s => s.id === activeTab)?.name}
                </h2>
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">
                    Cette section sera développée avec les fonctionnalités de gestion de contenu.
                  </p>
                  <p className="text-sm text-gray-400">
                    Pour l'instant, utilisez l'interface Netlify CMS à l'adresse : <br />
                    <code className="bg-gray-100 px-2 py-1 rounded">/admin</code>
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;