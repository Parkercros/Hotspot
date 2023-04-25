import './globals.css';
import { Nunito } from "next/font/google";
import Navbar from './components/navbar/Navbar';



export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
