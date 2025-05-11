import Navbar from "src/components/ui/navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "@/components/hooks/use-toast";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Navbar />
      <Component {...pageProps} />
    </ToastProvider>
  );
}
