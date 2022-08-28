import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import Head from "next/head";
import { AppPropsWithLayout } from "shared/@types/Layout";
import { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>DashGo</title>
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;