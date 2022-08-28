import { Box, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "components/ui/SideBar/partials/NavLink";
import { ReactNode } from "react";
import { Link } from "shared/@types/Link";

type Props = {
  links: Link[];
  title: string | ReactNode;
};

const NavSection = ({ links, title }: Props) => (
  <Box>
    <Text
      fontWeight={"bold"}
      color={"gray.400"}
      fontSize={"small"}
      textTransform={"uppercase"}
    >
      {title}
    </Text>

    <Stack gap={"4"} mt={"8"} alignItems={"stretch"}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          href={link.path}
          icon={link.icon}
          text={link.text}
        />
      ))}
    </Stack>
  </Box>
);

export { NavSection };