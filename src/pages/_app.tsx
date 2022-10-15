import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import Head from "next/head";
import { AppPropsWithLayout } from "shared/@types/Layout";
import { ReactElement } from "react";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "shared/services/queryClient";
import { AuthContextProvider } from "contexts/AuthContext";

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
          <AuthContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </AuthContextProvider>
        </Hydrate>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;