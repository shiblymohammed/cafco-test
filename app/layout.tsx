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
        <html lang="en" className="overflow-x-hidden">
            <body className="overflow-x-hidden w-full">
                <Navbar />
                <main className="overflow-x-hidden">
                    {children}
                </main>
                <Footer />
                <MobileNav />
            </body>
        </html>
    );
}
