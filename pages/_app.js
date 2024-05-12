import "@/styles/globals.css";
import Navbar from "./navbar";
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> 
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
