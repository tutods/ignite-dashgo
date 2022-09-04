import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import Head from "next/head";
import { AppPropsWithLayout } from "shared/@types/Layout";
import { ReactElement } from "react";
import { makeServer } from "shared/services/mirage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={theme}>
        <Head>
          <title>DashGo</title>
        </Head>

        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;