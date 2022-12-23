import { AppProps } from "next/app";
import dynamic from "next/dynamic";

import { MantineProvider } from "@mantine/core";
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
