import { Box, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "components/ui/NavLink";

const SideBar = () => {
  return (
    <Box as={"aside"} h={"64"} mr={"8"}>
      <Stack gap={"12"} alignItems={"flex-start"}>
        <Box>
          <Text
            fontWeight={"bold"}
            color={"gray.400"}
            fontSize={"small"}
            textTransform={"uppercase"}
          >
            General
          </Text>

          <Stack gap={"4"} mt={"8"} alignItems={"stretch"}>
            <NavLink
              href={"/dashboard"}
              icon={RiDashboardLine}
              text={"Dashboard"}
            />

            <NavLink href={"/users"} icon={RiContactsLine} text={"Users"} />
          </Stack>
        </Box>
        <Box>
          <Text
            fontWeight={"bold"}
            color={"gray.400"}
            fontSize={"small"}
            textTransform={"uppercase"}
          >
            Automation
          </Text>

          <Stack gap={"4"} mt={"8"} alignItems={"stretch"}>
            <NavLink href={"/forms"} icon={RiInputMethodLine} text={"Forms"} />

            <NavLink
              href={"/automation"}
              icon={RiGitMergeLine}
              text={"Automation"}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export { SideBar };