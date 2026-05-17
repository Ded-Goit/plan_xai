import type { Metadata } from "next";
import {
  inter,
  lexend,
  anta,
  openSans,
  inika,
  plusJakarta,
} from "./fonts";

import "./globals.css";

// Providers
import { TooltipProvider } from "@/components/ui/tooltip";
//import { Toaster } from "@/components/ui/sonner";
//import { SidebarProvider } from "@/components/ui/sidebar";

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
      lang="uk"
      suppressHydrationWarning
      className={`${inter.variable}
        ${lexend.variable}
        ${anta.variable}
        ${openSans.variable}
        ${inika.variable}
        ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <TooltipProvider>          
            {children}                    
        </TooltipProvider>
      </body>
    </html>
  );
}
/**return (
    <html
      lang="uk"
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
  ); */