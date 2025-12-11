import { Outfit } from "next/font/google";
import "./globals.css";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import MeshBackground from "@/components/MeshBackground";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit'
});

export const metadata = {
  title: "Aditya Raj Jha - Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <WelcomeOverlay />
        <MeshBackground />
        {children}
      </body>
    </html>
  );
}
