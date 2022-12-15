import { AppProps } from "next/app";
import "@blueprintjs/core/lib/css/blueprint.css";
import "#/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
