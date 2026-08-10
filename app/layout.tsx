import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Metadata } from 'next';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  variable: '--roboto-font',
  weight: ['500', '700'],
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
  booksModal: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Next.js Practice',
  description:
    'Demo app built with Next.js during GoIt course practice lessons',
  keywords: ['javascript', 'nextjs', 'react'],
  openGraph: {
    title: 'Next.js Practice',
    description:
      'Demo app built with Next.js during GoIt course practice lessons',
    images: [
      {
        url: 'https://picsum.photos/200/300',
        width: 200,
        height: 300,
        alt: 'Application illustration',
      },
    ],
  },
};

export default function RootLayout({ children, booksModal }: RootLayoutProps) {
  return (
    <html lang="en">
      <TanStackProvider>
        <body className={roboto.variable}>
          <Header />
          <main>
            {children}
            {booksModal}
          </main>
          <Footer />
        </body>
      </TanStackProvider>
    </html>
  );
}
