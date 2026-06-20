import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose Pedro Lorenzini - Full Stack Web Developer",
  description:
    "Professional biography for Jose Pedro Lorenzini, full stack web developer and digital architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}