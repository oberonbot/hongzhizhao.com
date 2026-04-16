import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Providers from '@/components/providers';

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: 'Hongzhi Zhao',
    template: '%s | Hongzhi Zhao',
  },
  description: 'Personal portfolio of Hongzhi Zhao — projects, blog, photography, and UI experiments.',
};

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
          fontHeading.variable
        )}
      >
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
