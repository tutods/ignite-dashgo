import { Box, Stack } from "@chakra-ui/react";
import { menu } from "components/ui/SideBar/data/menu";
import { NavSection } from "components/ui/SideBar/partials/NavSection";

const SideBar = () => {
  return (
    <Box as={"aside"} h={"100%"} mr={"8"}>
      <Stack gap={"12"} alignItems={"flex-start"}>
        {menu.map((item) => (
          <NavSection
            key={item.label.toLowerCase()}
            links={item.links}
            title={item.label}
          />
        ))}
      </Stack>
    </Box>
  );
};

export { SideBar };