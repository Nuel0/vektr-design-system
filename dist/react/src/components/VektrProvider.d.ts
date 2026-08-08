import React from 'react';
export type ThemeMode = 'light' | 'dark';
export type BrandMode = 'default' | 'fintech' | 'health-tech' | 'hospitality' | 'edtech';
interface VektrThemeContextType {
    theme: ThemeMode;
    brand: BrandMode;
    setTheme: (theme: ThemeMode) => void;
    setBrand: (brand: BrandMode) => void;
    toggleTheme: () => void;
}
export interface VektrProviderProps {
    children: React.ReactNode;
    defaultTheme?: ThemeMode;
    defaultBrand?: BrandMode;
}
export declare const VektrProvider: React.FC<VektrProviderProps>;
export declare const useVektrTheme: () => VektrThemeContextType;
export {};
//# sourceMappingURL=VektrProvider.d.ts.map