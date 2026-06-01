import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Providers from '@/components/providers';
import AnimatedGradientBackground from '@/components/animated-gradient-background';

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

const fontBody = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-body',
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
          'min-h-screen relative overflow-x-hidden bg-background font-sans antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Providers>
          <AnimatedGradientBackground />
          <div className='relative z-10'>
            <NavBar />
            {children}
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
