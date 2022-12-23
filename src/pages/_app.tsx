import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "#/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const CSR = dynamic(() => import("#/components/CSRInner"), { ssr: false });
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <CSR>
        <Component {...pageProps} />
      </CSR>
    </MantineProvider>
  );
}

export default MyApp;
