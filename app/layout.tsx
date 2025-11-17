import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import MobileNav from "@/src/components/layout/MobileNav";

export const metadata: Metadata = {
    title: "CAFCOHOME - Furniture Ecommerce",
    description: "Premium furniture for your home",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="pt-12 md:pt-16">
                    {children}
                </main>
                <Footer />
                <MobileNav />
            </body>
        </html>
    );
}
