import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

// Define the palette interface
export type Palette = {
  primary: string;
  secondary: string;
};
