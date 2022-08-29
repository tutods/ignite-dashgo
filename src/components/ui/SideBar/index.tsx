import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SidebarNav } from "components/ui/SideBar/partials/SideBarNav";
import { useSidebarDrawer } from "contexts/SidebarDrawerContext";

const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({ base: true, lg: false });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={"gray.800"} p={4}>
            <DrawerCloseButton mt={"6"} />
            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as={"aside"} h={"100%"} mr={"8"}>
      <SidebarNav />
    </Box>
  );
};

export { Sidebar };