import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "components/ui/Header/partials/Logo";
import { profileData } from "shared/data/constants/profile";
import { SearchBox } from "components/ui/Header/partials/SearchBox";
import { Notifications } from "components/ui/Header/partials/Notifications";
import { Profile } from "components/ui/Profile";

const Header = () => {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
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
      <Flex gap={"2"} alignItems={"center"}>
        {!isWideVersion && (
          <IconButton
            aria-label={"Open Navigation"}
            variant={"unstyled"}
            icon={<Icon as={RiMenuLine} fontSize={"lg"} />}
            onClick={onOpen}
          />
        )}

        <Logo />
      </Flex>

      {isWideVersion && <SearchBox />}

      <Flex alignItems={"center"}>
        <Notifications />

        <Profile profile={profileData} showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export { Header };