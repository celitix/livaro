
import './globals.css';
import { TopBar } from '@/components/shared/header/top-bar';
import { Navigation } from '@/components/shared/header/navigation';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  metadataBase: new URL('https://livaro.com'),
  title: { default: 'LIVARO | Luxury Modular Interiors', template: '%s | LIVARO' },
  description: 'Premium modular kitchens, wardrobes and custom furniture designed with timeless aesthetics and functional precision.',
  openGraph: { title: 'LIVARO', description: 'Kitchen | Wardrobes | Furniture', url: 'https://livaro.com', siteName: 'LIVARO', type: 'website' }
};

export default function RootLayout({ children }) { return <html lang="en"><body><TopBar/><Navigation/>{children}<Footer/></body></html>; }
