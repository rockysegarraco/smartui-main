import PasswordProtection from "@/components/PasswordProtection";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PasswordProtection>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </PasswordProtection>
  );
}

export default MyApp;
