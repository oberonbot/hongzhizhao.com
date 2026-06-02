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
    swatch: ['#c8edf7', '#8fb9c1'],
    top: [0.96, 0.94, 0.84],
    bottom: [0.7, 0.82, 0.84],
    accent: [0.7, 0.9, 0.98],
    shadow: [0.32, 0.48, 0.54],
    grain: 0.058,
  },
  {
    id: 'violet',
    label: 'Violet',
    swatch: ['#ece9f5', '#8f91c8'],
    top: [0.92, 0.9, 0.97],
    bottom: [0.62, 0.63, 0.82],
    accent: [0.72, 0.74, 0.92],
    shadow: [0.34, 0.34, 0.55],
    grain: 0.062,
  },
  {
    id: 'rose',
    label: 'Rose',
    swatch: ['#edc2c3', '#a47674'],
    top: [0.92, 0.72, 0.73],
    bottom: [0.7, 0.5, 0.5],
    accent: [0.9, 0.58, 0.58],
    shadow: [0.44, 0.3, 0.3],
    grain: 0.06,
  },
];

export const defaultBackgroundPaletteId = backgroundPalettes[0].id;
