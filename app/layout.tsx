import type { Metadata } from "next";
import { Hammersmith_One, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";

const hammersmith = Hammersmith_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-hammersmith",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    variable: "--font-playfair",
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
            <body className={`${hammersmith.variable} ${playfair.variable} font-primary overflow-x-hidden w-full`}>
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
