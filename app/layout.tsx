'use client';
import './globals.css';
// import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import NavBar from '@/components/navbar';
import PaletteContextProvider from '@/context/palette-context';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

// const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen relative bg-background font-sans antialiased',
          // fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <PaletteContextProvider>
            <ActiveSectionContextProvider>
              <NavBar />
              {children}
              <Analytics />
              <Footer />

              <Toaster position='top-right' />
            </ActiveSectionContextProvider>
          </PaletteContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
