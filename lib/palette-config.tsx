import { BackgroundPalette } from './types';

export const paletteConfig = {
  default: {
    primary: '#fcc89b',
    secondary: '#ff5fa2',
  },
  'le-sserafim': {
    primary: '#de1540',
    secondary: '#000000',
  },

  // Add more palettes here
} as const;

export const backgroundPalettes: BackgroundPalette[] = [
  {
    id: 'sky',
    label: 'Sky',
    swatch: ['#9dd5f1', '#173441'],
    top: [0.9, 0.87, 0.74],
    bottom: [0.43, 0.61, 0.67],
    accent: [0.54, 0.83, 0.95],
    shadow: [0.06, 0.2, 0.27],
    grain: 0.058,
  },
  {
    id: 'violet',
    label: 'Violet',
    swatch: ['#d7d4e8', '#35366f'],
    top: [0.82, 0.81, 0.91],
    bottom: [0.22, 0.22, 0.48],
    accent: [0.55, 0.57, 0.83],
    shadow: [0.02, 0.03, 0.08],
    grain: 0.062,
  },
  {
    id: 'rose',
    label: 'Rose',
    swatch: ['#d69b9d', '#39201f'],
    top: [0.82, 0.55, 0.56],
    bottom: [0.34, 0.2, 0.2],
    accent: [0.78, 0.36, 0.36],
    shadow: [0.08, 0.04, 0.04],
    grain: 0.06,
  },
];

export const defaultBackgroundPaletteId = backgroundPalettes[0].id;
