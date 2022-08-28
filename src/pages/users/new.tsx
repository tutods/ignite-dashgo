import { NextPageWithLayout } from "shared/@types/Layout";
import { ReactElement } from "react";
import { PanelLayout } from "components/layouts/Panel";
import Head from "next/head";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Input } from "components/form/Input";

const CreateUser: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create User | DashGo</title>
      </Head>
      <Box flex={1} borderRadius={"8"} bg={"gray.800"} p={"8"}>
        <Stack spacing={"6"} mb={"8"}>
          <Heading as={"h2"} size={"lg"} fontWeight={"normal"}>
            Create New User
          </Heading>

          <Divider borderColor={"gray.700"} />
        </Stack>

        <VStack spacing={"8"}>
          <SimpleGrid
            gridTemplateColumns={"repeat(2, 1fr)"}
            minChildWidth={240}
            w={"100%"}
            spacing={"8"}
          >
            <Input name={"name"} id={"name"} label={"User Name"} isRequired />
            <Input
              type={"email"}
              name={"email"}
              id={"email"}
              label={"User Email"}
              isRequired
            />
            <Input
              type={"password"}
              name={"password"}
              id={"password"}
              label={"Password"}
              isRequired
            />
            <Input
              type={"password"}
              name={"confirmPassword"}
              id={"confirmPassword"}
              label={"Confirm Password"}
              isRequired
            />
          </SimpleGrid>

          <Flex
            w={"100%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={"4"}
            mt={"8"}
          >
            <Button colorScheme={"whiteAlpha"}>Cancel</Button>
            <Button colorScheme={"pink"}>Save</Button>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

CreateUser.getLayout = (page: ReactElement) => (
  <PanelLayout>{page}</PanelLayout>
);

export default CreateUser;