import { ReactNode } from "react";
import { Header } from "components/ui/Header";
import { SideBar } from "components/ui/SideBar";
import { Flex } from "@chakra-ui/react";

type PanelLayoutProps = {
  children: ReactNode;
};

const PanelLayout = ({ children }: PanelLayoutProps) => {
  return (
    <Flex as={"main"} direction={"column"} h={"100vh"}>
      <Header />

      <Flex w={"100%"} maxWidth={1480} mx={"auto"} px={"6"}>
        <SideBar />
        {children}
      </Flex>
    </Flex>
  );
};

export { PanelLayout };