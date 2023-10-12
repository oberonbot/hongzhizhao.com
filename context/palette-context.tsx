'use client';

import React, { createContext, useContext, useState } from 'react';
import { paletteConfig } from '@/lib/palette-config';
import { Palette } from '@/lib/types';

// Create the context
interface PaletteContextType {
  palette: Palette;
  setPalette: (palette: Palette) => void;
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

// Create the PaletteContextProvider
export default function PaletteContextProvider({ children }: any) {
  const [palette, setCurrentPalette] = useState<Palette>({
    primary: paletteConfig.default.primary, // Default primary color
    secondary: paletteConfig.default.secondary, // Default secondary color
  });

  const setPalette = (palette: Palette) => {
    setCurrentPalette(palette);
  };

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}

// Custom hook to use the palette context
export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used within a PaletteContextProvider');
  }
  return context;
};
