import { useState, useEffect } from 'react';

// Hook pour charger le contenu depuis les fichiers JSON
export const useContent = (contentType: string) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/src/data/${contentType}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load ${contentType} content`);
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err);
        console.error(`Error loading ${contentType} content:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentType]);

  return { content, loading, error };
};

// Hook pour charger une collection (services, projets)
export const useCollection = (collectionType: string) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCollection = async () => {
      try {
        setLoading(true);
        // Pour l'instant, on utilise des données statiques
        // Plus tard, cela pourra être connecté à une API ou à des fichiers dynamiques
        setItems([]);
      } catch (err) {
        setError(err);
        console.error(`Error loading ${collectionType} collection:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadCollection();
  }, [collectionType]);

  return { items, loading, error };
};