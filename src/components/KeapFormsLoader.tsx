import React, { useEffect, useState } from 'react';

interface KeapFormsLoaderProps {
  children: React.ReactNode;
}

const KeapFormsLoader: React.FC<KeapFormsLoaderProps> = ({ children }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadKeapScript = () => {
      if (document.querySelector('script[src^="https://forms.keap.app"]')) {
        setScriptLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://forms.keap.app/lib/public-form-embed.js?appId=zex739&version=1.1.0';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        setScriptLoaded(true);
        if (window.keapForms && typeof window.keapForms.renderAllForms === 'function') {
          try {
            window.keapForms.renderAllForms();
          } catch (error) {
            console.error('Error rendering Keap Forms:', error);
            setError('Failed to render Keap Forms. Please try refreshing the page.');
          }
        }
      };
      script.onerror = () => {
        console.error('Error loading Keap Forms script');
        setError('Failed to load Keap Forms. Please check your internet connection and try again.');
      };
      document.body.appendChild(script);
    };

    loadKeapScript();

    return () => {
      const script = document.querySelector('script[src^="https://forms.keap.app"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!scriptLoaded) {
    return <div>Loading Keap Forms...</div>;
  }

  return <>{children}</>;
};

export default KeapFormsLoader;