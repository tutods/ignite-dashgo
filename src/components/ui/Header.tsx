import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { Logo } from "components/ui/Logo";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

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

      <Flex
        as={"label"}
        flex={"1"}
        py={"4"}
        px={"8"}
        maxW={400}
        alignSelf={"center"}
        color={"gray.200"}
        position={"relative"}
        bg={"gray.800"}
        borderRadius={"full"}
      >
        <Input
          color={"gray.50"}
          variant={"unstyled"}
          placeholder={"Search for results..."}
          _placeholder={{ color: "gray.400" }}
          px={"4"}
          mr={"4"}
          name={"search"}
          id={"search"}
        />
        <Icon as={RiSearchLine} fontSize={"20"} />
      </Flex>

      <Flex alignItems={"center"}>
        <HStack
          gap={"8"}
          mx={"8"}
          pr={"8"}
          py={"1"}
          color={"gray.300"}
          borderRightWidth={1}
          borderColor={"gray.700"}
        >
          <Icon as={RiNotificationLine} fontSize={"20"} />
          <Icon as={RiUserAddLine} fontSize={"20"} />
        </HStack>

        <Flex alignItems={"center"}>
          <Box mr={"4"} textAlign={"right"}>
            <Text>Daniel Sousa</Text>
            <Text color={"gray.300"} fontSize={"small"}>
              geral@daniel-sousa.com
            </Text>
          </Box>

          <Avatar
            size={"md"}
            name={"Daniel Sousa"}
            src={"https://github.com/tutods.png"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Header };