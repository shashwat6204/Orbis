import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css"; // Import global styles

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
