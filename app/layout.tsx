import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { addBasePath } from "@/lib/basePath";

const sourceSansPro = localFont({
  src: [
    {
      path: "../fonts/source-sans-pro.light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/source-sans-pro.semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/source-sans-pro.bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-source-sans-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ereolen.dk"),
  title: "eReolen",
  description:
    "eReolen er flyttet til din lokale bibliotekshjemmeside. Vælg dit bibliotek her.",
  openGraph: {
    title: "eReolen",
    description:
      "eReolen er flyttet til din lokale bibliotekshjemmeside. Vælg dit bibliotek her.",
    images: [addBasePath("/ereolen_logo_some.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "eReolen",
    description:
      "eReolen er flyttet til din lokale bibliotekshjemmeside. Vælg dit bibliotek her.",
    images: [addBasePath("/ereolen_logo_some.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <script
          data-category-consent="cookie_cat_statistic"
          data-consent-src={addBasePath("/tiLoader.min.js")}
          key="ti-loader"
          id="ti-loader"
          defer
        />
        <script id="CookieConsent" src="https://policy.app.cookieinformation.com/uc.js" async
    data-culture="EN" data-gcm-version="2.0" type="text/javascript"></script>
      </head>
      <body
        className={`${sourceSansPro.className} flex min-h-screen flex-col antialiased`}
      >
        <main className="bg-secondary flex flex-1 px-4">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8 md:py-12">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
