import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.allanroge.fr"),
  title: "Allan Rogé | Designer et Communicant",
  description: "Portfolio de Allan Rogé, Designer et Communicant à la recherche d'une alternance pour 2026.",
  keywords: ["Designer", "Communicant", "Portfolio", "Allan Rogé", "Créatif", "Alternance 2026"],
  authors: [{ name: "Allan Rogé" }],
  creator: "Allan Rogé",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.allanroge.fr",
    title: "Allan Rogé | Designer et Communicant",
    description: "Portfolio de Allan Rogé, Designer et Communicant à la recherche d'une alternance pour 2026.",
    siteName: "Allan Rogé Portfolio",
    images: [
      {
        url: "https://www.allanroge.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allan Rogé Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Rogé | Designer et Communicant",
    description: "Portfolio de Allan Rogé, Designer et Communicant à la recherche d'une alternance pour 2026.",
    images: ["https://www.allanroge.fr/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body suppressHydrationWarning className="antialiased bg-brand-light text-brand-dark min-h-screen overflow-x-hidden selection:bg-brand-olive selection:text-brand-dark">
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>
            {children}
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
