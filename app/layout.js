import Navbar from "./components/Navbar";
import './globals.css';

export const metadata = {
  title: 'Barbershop',
  description: 'book all your appointments online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}