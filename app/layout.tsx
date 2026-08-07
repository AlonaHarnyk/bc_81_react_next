import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

interface RootLayoutProps {
  children: React.ReactNode;
  booksModal: React.ReactNode;
}

export default function RootLayout({ children, booksModal }: RootLayoutProps) {
  return (
    <html lang="en">
      <TanStackProvider>
        <body>
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
