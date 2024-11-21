import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const designio = localFont({
  src: [
    { path: "./fonts/DesignioRegular.woff", weight: "400", style: "normal" },
    { path: "./fonts/DesignioMedium.woff", weight: "600", style: "normal" },
    { path: "./fonts/DesignioBold.woff", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "BeardKoda: The Beard Coder",
  description: "my codes come alive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={designio.className}>{children}</body>
    </html>
  );
}
