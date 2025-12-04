import type { Metadata } from "next";
import { Hammersmith_One, Averia_Serif_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";

const hammersmith = Hammersmith_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-hammersmith",
    display: "swap",
});

const averiaSerif = Averia_Serif_Libre({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-averia",
    display: "swap",
});
import Footer from "@/src/components/layout/Footer";
import MobileFooter from "@/src/components/layout/MobileFooter";
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
            <body className={`${hammersmith.variable} ${averiaSerif.variable} font-primary overflow-x-hidden w-full`}>
                <Navbar />
                <main className="overflow-x-hidden">
                    {children}
                </main>
                <Footer />
                <MobileFooter />
                <MobileNav />
            </body>
        </html>
    );
}
