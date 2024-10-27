import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans, Plus_Jakarta_Sans } from "next/font/google";
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
        className={`${work_Sans.variable} ${plus_Jakarta_Sans.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
