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

export const VektrProvider: React.FC<VektrProviderProps> = ({
  children,
  defaultTheme = 'light',
  defaultBrand = 'default',
}) => {
  const [theme, setThemeState] = useState<ThemeMode>(defaultTheme);
  const [brand, setBrandState] = useState<BrandMode>(defaultBrand);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-brand', brand);
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
