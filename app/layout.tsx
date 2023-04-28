import './globals.css';
import { Nunito } from "next/font/google";
import Navbar from './components/navbar/Navbar';
import  ClientOnly  from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from '@/app/components/modals/RentModal';


export const metadata = {
  title: 'HotSpot',
  description: 'Hotspot',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();


  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <RegisterModal/>
          <LoginModal/>
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
