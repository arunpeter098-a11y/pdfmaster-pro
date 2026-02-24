import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: {
    default: "PDFMaster Pro - All-in-One Free PDF Toolkit",
    template: "%s | PDFMaster Pro",
  },
  description:
    "Convert, edit, compress, merge, split, and secure your PDF files online for free. 60+ professional PDF tools in one place.",
  keywords: [
    "PDF tools",
    "PDF converter",
    "merge PDF",
    "compress PDF",
    "split PDF",
    "PDF editor",
    "free PDF tools",
  ],
  openGraph: {
    title: "PDFMaster Pro - All-in-One Free PDF Toolkit",
    description:
      "Convert, edit, compress, merge, split, and secure your PDF files online for free.",
    type: "website",
    siteName: "PDFMaster Pro",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1020" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
