import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import WagmiProvider from "@/components/WagmiProvider";
import { NextUiProvider } from "@/components/NextUiProvider";
import { OrbisProvider } from "@/context/OrbisContext";
import HuddleProviders from "@/components/HuddleProviders";
import "./globals.css";
import TanstackQueryProvider from "@/components/TanstackQueryProvider";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GalaKlub - Limited Exclusive Artist Access & Unique Fan Badges ",
  description:
    "Unlock the ultimate fan experience with GalaKlub's limited edition passes! Connect with your favorite artists like never before through exclusive live streams, chat groups, and feed boards. Flaunt your unique fan badge, handpicked by the artists, and be part of a privileged community of enthusiasts. Seize your chance for unparalleled access and community activities - limited spots available!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <WagmiProvider>
          <OrbisProvider>
            <HuddleProviders>
              <TanstackQueryProvider>
                <NextUiProvider>{children}</NextUiProvider>
              </TanstackQueryProvider>
            </HuddleProviders>
          </OrbisProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
