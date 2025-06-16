import { useState, useEffect } from 'react';

// Hook pour charger les données depuis les fichiers JSON/Markdown
export const useContentData = (dataType: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Charger les données selon le type
        let response;
        switch (dataType) {
          case 'contact':
            response = await import('../data/contact.json');
            break;
          case 'slides':
            // Charger tous les slides
            const slideModules = import.meta.glob('../data/slides/*.md');
            const slides = [];
            for (const path in slideModules) {
              const mod = await slideModules[path]();
              slides.push(mod.default || mod);
            }
            response = { default: slides };
            break;
          default:
            throw new Error(`Type de données non supporté: ${dataType}`);
        }
        
        setData(response.default);
      } catch (err) {
        setError(err);
        console.error(`Erreur lors du chargement des données ${dataType}:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataType]);

  return { data, loading, error };
};

// Hook spécialisé pour les informations de contact
export const useContactInfo = () => {
  return useContentData('contact');
};

// Hook spécialisé pour les slides
export const useSlides = () => {
  return useContentData('slides');
};