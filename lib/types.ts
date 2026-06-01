import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

// Define the palette interface
export type Palette = {
  primary: string;
  secondary: string;
};

export type GradientColor = [number, number, number];

export type BackgroundPalette = {
  id: string;
  label: string;
  swatch: [string, string];
  top: GradientColor;
  bottom: GradientColor;
  accent: GradientColor;
  shadow: GradientColor;
  grain: number;
};
