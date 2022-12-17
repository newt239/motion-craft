import { AppProps } from "next/app";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "#/global.scss";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  const CSR = dynamic(() => import("#/components/CSRInner"), { ssr: false });
  return (
    <CSR>
      <Component {...pageProps} />
    </CSR>
  );
}

export default MyApp;
