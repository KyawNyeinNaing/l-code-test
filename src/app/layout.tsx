import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/providers';
import { ServerThemeProvider } from '@wits/next-themes';

import '@/styles/globals.css';
import '@radix-ui/themes/styles.css';
import '@/styles/theme.config.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokemon TCG Marketplace',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServerThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
