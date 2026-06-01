import Navbar from "@/components/Navbar";
import "./globals.css";

import {
  Sedgwick_Ave_Display,
  Afacad_Flux,
} from "next/font/google";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sedgwick",
});

const afacad = Afacad_Flux({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata = {
  title: "Barbershop",
  description: "book all your appointments online",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="nl"
      className={`${sedgwick.variable} ${afacad.variable}`}
    >
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}