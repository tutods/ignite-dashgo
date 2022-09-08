import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import Head from "next/head";
import { AppPropsWithLayout } from "shared/@types/Layout";
import { ReactElement } from "react";
import { makeServer } from "shared/services/mirage";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "shared/services/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.layout ?? ((page: ReactElement) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={theme}>
        <Head>
          <title>DashGo</title>
        </Head>

        <Hydrate state={dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;