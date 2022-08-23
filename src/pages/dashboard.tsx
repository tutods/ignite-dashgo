import { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/ui/Header";
import { Flex } from "@chakra-ui/react";
import { SideBar } from "components/ui/SideBar";

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
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;