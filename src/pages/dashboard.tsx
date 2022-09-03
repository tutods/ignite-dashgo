import Head from "next/head";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { getChartOptions } from "shared/utils/getChartOptions";
import { NextPageWithLayout } from "shared/@types/Layout";
import { PanelLayout } from "components/layouts/Panel";
import { ReactElement } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CHART_SERIES = [
  {
    name: "series1",
    data: [31, 120, 10, 20, 61, 18, 109],
  },
];

const CHART_CATEGORIES = [
  "2021-03-18T00:00:00.000Z",
  "2021-03-19T00:00:00.000Z",
  "2021-03-20T00:00:00.000Z",
  "2021-03-21T00:00:00.000Z",
  "2021-03-22T00:00:00.000Z",
  "2021-03-23T00:00:00.000Z",
  "2021-03-24T00:00:00.000Z",
];

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard | DashGo</title>
      </Head>

      <SimpleGrid
        flex={1}
        minChildWidth={"320px"}
        alignItems={"flex-start"}
        spacing={"4"}
      >
        <Box
          p={{ base: "6", md: "8" }}
          pb={"4"}
          bg={"gray.800"}
          borderRadius={"8"}
        >
          <Text fontSize={"lg"} fontWeight={"bold"} mb={"4"}>
            Subscribers of the week
          </Text>

          <Chart
            type={"area"}
            height={168}
            options={getChartOptions(CHART_CATEGORIES)}
            series={CHART_SERIES}
          />
        </Box>
        <Box
          p={{ base: "6", md: "8" }}
          pb={"4"}
          bg={"gray.800"}
          borderRadius={"8"}
        >
          <Text fontSize={"lg"} fontWeight={"bold"} mb={"4"}>
            Open Rate
          </Text>

          <Chart
            type={"area"}
            height={168}
            options={getChartOptions(CHART_CATEGORIES)}
            series={CHART_SERIES}
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => <PanelLayout>{page}</PanelLayout>;

export default Dashboard;