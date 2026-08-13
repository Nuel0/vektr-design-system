import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';
export type BrandMode = 'default' | 'fintech' | 'health-tech' | 'hospitality' | 'edtech';

interface VektrThemeContextType {
  theme: ThemeMode;
  brand: BrandMode;
  setTheme: (theme: ThemeMode) => void;
  setBrand: (brand: BrandMode) => void;
  toggleTheme: () => void;
}

const VektrThemeContext = createContext<VektrThemeContextType | undefined>(undefined);

export interface VektrProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  defaultBrand?: BrandMode;
}

export const themeScriptString = `(function() {
  try {
    var t = localStorage.getItem('vektr-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var b = localStorage.getItem('vektr-brand') || 'default';
    document.documentElement.dataset.theme = t;
    document.documentElement.dataset.brand = b;
  } catch (e) {}
})();`;

export const VektrProvider: React.FC<VektrProviderProps> = ({
  children,
  defaultTheme = 'light',
  defaultBrand = 'default',
}) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const domTheme = document.documentElement.dataset.theme as ThemeMode;
      if (domTheme) return domTheme;
      const storedTheme = localStorage.getItem('vektr-theme') as ThemeMode;
      if (storedTheme) return storedTheme;
    }
    return defaultTheme;
  });

  const [brand, setBrandState] = useState<BrandMode>(() => {
    if (typeof window !== 'undefined') {
      const domBrand = document.documentElement.dataset.brand as BrandMode;
      if (domBrand) return domBrand;
      const storedBrand = localStorage.getItem('vektr-brand') as BrandMode;
      if (storedBrand) return storedBrand;
    }
    return defaultBrand;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('vektr-theme', theme);
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-brand', brand);
    try {
      localStorage.setItem('vektr-brand', brand);
    } catch (e) {}
  }, [brand]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <VektrThemeContext.Provider
      value={{
        theme,
        brand,
        setTheme: setThemeState,
        setBrand: setBrandState,
        toggleTheme,
      }}
    >
      {children}
    </VektrThemeContext.Provider>
  );
};

export const useVektrTheme = (): VektrThemeContextType => {
  const context = useContext(VektrThemeContext);
  if (!context) {
    throw new Error('useVektrTheme must be used within a VektrProvider');
  }
  return context;
};
