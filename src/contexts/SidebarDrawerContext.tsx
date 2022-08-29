import { createContext, ReactNode, useContext, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";

type SidebarContextData = UseDisclosureReturn;

type SidebarProviderProps = {
  children: ReactNode;
};

const SidebarDrawerContext = createContext({} as SidebarContextData);

const SidebarDrawerProvider = ({ children }: SidebarProviderProps) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  /**
   * Close sidebar on router change
   */
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

const useSidebarDrawer = () => useContext(SidebarDrawerContext);

export { SidebarDrawerProvider, SidebarDrawerContext, useSidebarDrawer };