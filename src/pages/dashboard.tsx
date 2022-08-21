import { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/ui/Header";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard | DashGo</title>
      </Head>
      <Header />
      <h1>teste</h1>
    </>
  );
};

export default Dashboard;