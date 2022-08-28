import { Flex } from "@chakra-ui/react";
import { Logo } from "./partials/Logo";
import { Profile } from "./partials/Profile";
import { Notifications } from "./partials/Notifications";
import { SearchBox } from "./partials/SearchBox";

const Header = () => {
  return (
    <Flex
      as={"header"}
      w={"100%"}
      maxWidth={1480}
      h={"20"}
      mx={"auto"}
      py={"4"}
      px={"6"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"12"}
    >
      <Logo />

      <SearchBox />

      <Flex alignItems={"center"}>
        <Notifications />

        <Profile />
      </Flex>
    </Flex>
  );
};

export { Header };