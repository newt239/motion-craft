import { AppProps } from "next/app";
import "@blueprintjs/core/lib/css/blueprint.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
