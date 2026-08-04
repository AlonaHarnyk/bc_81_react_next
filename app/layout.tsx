import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <TanStackProvider>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </TanStackProvider>
    </html>
  );
}
