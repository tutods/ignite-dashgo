import { ReactNode } from "react";
import { SideBar } from "components/ui/SideBar";
import { Flex } from "@chakra-ui/react";
import { Header } from "components/ui/Header";

type Props = {
  children: ReactNode;
};

const PanelLayout = ({ children }: Props) => {
  return (
    <Flex as={"main"} direction={"column"} h={"100vh"}>
      <Header />
      <Flex w={"100%"} maxWidth={1480} mx={"auto"} mt={"4"} px={"6"}>
        <SideBar />
        {children}
      </Flex>
    </Flex>
  );
};

export { PanelLayout };