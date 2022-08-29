import { menu } from "components/ui/SideBar/data/menu";
import { NavSection } from "components/ui/SideBar/partials/NavSection";
import { Stack } from "@chakra-ui/react";

const SidebarNav = () => (
  <Stack gap={"12"} alignItems={"flex-start"}>
    {menu.map((item) => (
      <NavSection
        key={item.label.toLowerCase()}
        links={item.links}
        title={item.label}
      />
    ))}
  </Stack>
);

export { SidebarNav };