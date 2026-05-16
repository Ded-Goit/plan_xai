import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";

import "./globals.css";

// Providers
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlanXAI",
  description: "AI Operating System for Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <TooltipProvider>
          <SidebarProvider>
            {children}

            <Toaster richColors position="top-right" />
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
