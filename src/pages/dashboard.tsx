import { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/ui/Header";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { SideBar } from "components/ui/SideBar";
import dynamic from "next/dynamic";
import { getChartOptions } from "shared/utils/getChartOptions";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const subscribersChartSeries = [
  {
    name: "series1",
    data: [31, 120, 10, 20, 61, 18, 109],
  },
];

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard | DashGo</title>
      </Head>

      <Flex direction={"column"} h={"100vh"}>
        <Header />

        <Flex w={"100%"} maxWidth={1480} mx={"auto"} px={"6"}>
          <SideBar />

          <SimpleGrid
            flex={1}
            gap={"4"}
            minChildWidth={320}
            alignItems={"flex-start"}
          >
            <Box p={"8"} pb={"4"} bg={"gray.800"} borderRadius={"8"}>
              <Text fontSize={"lg"} fontWeight={"bold"} mb={"4"}>
                Subscribers of the week
              </Text>

              <Chart
                type={"area"}
                height={168}
                options={getChartOptions([
                  "2021-03-18T00:00:00.000Z",
                  "2021-03-19T00:00:00.000Z",
                  "2021-03-20T00:00:00.000Z",
                  "2021-03-21T00:00:00.000Z",
                  "2021-03-22T00:00:00.000Z",
                  "2021-03-23T00:00:00.000Z",
                  "2021-03-24T00:00:00.000Z",
                ])}
                series={subscribersChartSeries}
              />
            </Box>
            <Box p={"8"} pb={"4"} bg={"gray.800"} borderRadius={"8"}>
              <Text fontSize={"lg"} fontWeight={"bold"} mb={"4"}>
                Open Rate
              </Text>

              <Chart
                type={"area"}
                height={168}
                options={getChartOptions([
                  "2021-03-18T00:00:00.000Z",
                  "2021-03-19T00:00:00.000Z",
                  "2021-03-20T00:00:00.000Z",
                  "2021-03-21T00:00:00.000Z",
                  "2021-03-22T00:00:00.000Z",
                  "2021-03-23T00:00:00.000Z",
                  "2021-03-24T00:00:00.000Z",
                ])}
                series={subscribersChartSeries}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;