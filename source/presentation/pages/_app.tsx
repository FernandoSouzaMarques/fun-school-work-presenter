import React from "react";
import type { AppProps } from "next/app";
import 'swiper/css';
import 'swiper/css/navigation';
import "@/presentation/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp