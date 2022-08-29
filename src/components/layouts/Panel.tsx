import { ReactNode } from "react";
import { Sidebar } from "components/ui/SideBar";
import { Flex } from "@chakra-ui/react";
import { Header } from "components/ui/Header";
import { SidebarDrawerProvider } from "contexts/SidebarDrawerContext";

type Props = {
  children: ReactNode;
};

const PanelLayout = ({ children }: Props) => {
  return (
    <SidebarDrawerProvider>
      <Flex as={"main"} direction={"column"} h={"100vh"}>
        <Header />
        <Flex w={"100%"} maxWidth={1480} mx={"auto"} mt={"4"} px={"6"}>
          <Sidebar />
          {children}
        </Flex>
      </Flex>
    </SidebarDrawerProvider>
  );
};

export { PanelLayout };