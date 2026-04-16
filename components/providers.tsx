'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/context/active-section-context';
import PaletteContextProvider from '@/context/palette-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <PaletteContextProvider>
        <ActiveSectionContextProvider>
          {children}
          <Toaster position='top-right' />
        </ActiveSectionContextProvider>
      </PaletteContextProvider>
    </ThemeProvider>
  );
}
