import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import FAQSection from "@/components/faq";

export const metadata: Metadata = {
  title: "Shadnous",
  description: "Celebrity Membership Card Purchase Platform",
  keywords: ["Celebrity", "Loyal fans", "membership card"],
  metadataBase: new URL("https://privito.vercel.app"),
  openGraph: {
    title: "Shadnous",
    description: "Celebrity Membership Card Purchase Platform",
    url: "https://privito.vercel.app",
    siteName: "Shadnous",
    locale: "en_US",
    type: "website",
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
    <html lang="en" className="bg-black text-white scroll-smooth">
      <Navbar />
      <body>{children}</body>
      <section className="relative z-30 bg-gradient-to-b from-black via-[#001018] to-[#000000] py-32">
        <FAQSection />
      </section>
      <Footer />
    </html>
  );
}
