import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

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
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"4"}
              transition={"color 0.3s"}
              _hover={{
                textDecoration: "none",
                color: "pink.400",
              }}
            >
              <Icon as={RiDashboardLine} fontSize={"20"} />
              <Text fontWeight={"medium"}>Dashboard</Text>
            </Link>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"4"}
              transition={"color 0.3s"}
              _hover={{
                textDecoration: "none",
                color: "pink.400",
              }}
            >
              <Icon as={RiContactsLine} fontSize={"20"} />
              <Text fontWeight={"medium"}>Users</Text>
            </Link>
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
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"4"}
              transition={"color 0.3s"}
              _hover={{
                textDecoration: "none",
                color: "pink.400",
              }}
            >
              <Icon as={RiInputMethodLine} fontSize={"20"} />
              <Text fontWeight={"medium"}>Forms</Text>
            </Link>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"4"}
              transition={"color 0.3s"}
              _hover={{
                textDecoration: "none",
                color: "pink.400",
              }}
            >
              <Icon as={RiGitMergeLine} fontSize={"20"} />
              <Text fontWeight={"medium"}>Automation</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export { SideBar };