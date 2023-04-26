import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />

      <main>
        <Component {...pageProps} />
      </main>

      <SiteFooter />
    </>
  );
}
