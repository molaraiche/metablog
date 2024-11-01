import type { Metadata } from "next";
import { Work_Sans, Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MetaBlog | Technologies blog web application",
  description: "Technologies blog web application",
};

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${work_Sans.variable} ${plus_Jakarta_Sans.variable} antialiased bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText`}>
        <ThemeProvider>
          <main className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 font-work'>
            <NavBar />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
