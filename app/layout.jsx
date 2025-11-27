import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Eddy Guzman | Automation Engineer",
  description: "Automation Engineer & AI Systems Builder portfolio CV",
  openGraph: {
    title: "Eddy Guzman | Automation Engineer",
    description: "Automation systems, AI agents, and workflow design portfolio.",
    url: "https://example.com",
    siteName: "Eddy Guzman",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="bg-ink text-slate-100 antialiased selection:bg-highlight/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
