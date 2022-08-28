import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const Profile = () => (
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
);

export { Profile };