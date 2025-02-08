import type { Metadata } from "next";
import React from "react";
import { ABeeZee } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/Header";
// import { QueryClient, QueryClientProvider } from "react-query";
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const abeezee = ABeeZee({ weight: "400", subsets: ["latin"] });
//const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Néo Mobile App",
  description: "Application mobile moderne avec Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //<QueryClientProvider client={queryClient}>
      <html lang="fr" suppressHydrationWarning>
        <head>
        {/* <script src="https://unpkg.com/@tailwindcss/browser@4"></script> */}
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            abeezee.className
          )}
        >
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 px-0 py-4">
            <div className="desktop-message hidden lg:block text-center text-gray-500">
              L&apos;application est disponible uniquement sur tablette et mobile.
            </div>
            <div className="mobile-content block lg:hidden">{children}</div>
          </main>
        </body>
      </html>
    //</QueryClientProvider>
  );
}
