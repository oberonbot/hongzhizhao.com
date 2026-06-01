'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  backgroundPalettes,
  defaultBackgroundPaletteId,
  paletteConfig,
} from '@/lib/palette-config';
import { BackgroundPalette, Palette } from '@/lib/types';

interface PaletteContextType {
  backgroundPalettes: BackgroundPalette[];
  gradientPalette: BackgroundPalette;
  gradientPaletteId: string;
  palette: Palette;
  setGradientPaletteId: (paletteId: string) => void;
  setPalette: (palette: Palette) => void;
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);
const STORAGE_KEY = 'hongzhi-gradient-palette';

export default function PaletteContextProvider({ children }: { children: React.ReactNode }) {
  const [gradientPaletteId, setCurrentGradientPaletteId] = useState(
    defaultBackgroundPaletteId
  );
  const [palette, setCurrentPalette] = useState<Palette>({
    primary: paletteConfig.default.primary,
    secondary: paletteConfig.default.secondary,
  });

  useEffect(() => {
    const savedPaletteId = window.localStorage.getItem(STORAGE_KEY);

    if (savedPaletteId && backgroundPalettes.some(({ id }) => id === savedPaletteId)) {
      setCurrentGradientPaletteId(savedPaletteId);
    }
  }, []);

  const gradientPalette = useMemo(
    () =>
      backgroundPalettes.find(({ id }) => id === gradientPaletteId) ??
      backgroundPalettes[0],
    [gradientPaletteId]
  );

  const setGradientPaletteId = (paletteId: string) => {
    if (!backgroundPalettes.some(({ id }) => id === paletteId)) {
      return;
    }

    setCurrentGradientPaletteId(paletteId);
    window.localStorage.setItem(STORAGE_KEY, paletteId);
  };

  const setPalette = (palette: Palette) => {
    setCurrentPalette(palette);
  };

  return (
    <PaletteContext.Provider
      value={{
        backgroundPalettes,
        gradientPalette,
        gradientPaletteId,
        palette,
        setGradientPaletteId,
        setPalette,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
}

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used within a PaletteContextProvider');
  }
  return context;
};
