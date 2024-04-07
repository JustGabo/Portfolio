import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KC Dev",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
          <Analytics/>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
