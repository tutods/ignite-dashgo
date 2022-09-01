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
import Link from "next/link";

const CreateUser: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create User | DashGo</title>
      </Head>
      <Box flex={1} borderRadius={"8"} bg={"gray.800"} p={["6", "8"]}>
        <Stack gap={"6"} mb={"8"}>
          <Heading as={"h2"} size={"lg"} fontWeight={"normal"}>
            Create New User
          </Heading>

          <Divider borderColor={"gray.700"} />
        </Stack>

        <VStack gap={"8"}>
          <SimpleGrid
            minChildWidth={"240px"}
            gridTemplateColumns={{
              base: "",
              md: "repeat(2, 1fr)",
            }}
            w={"100%"}
            gap={{
              base: "4",
              lg: "8",
            }}
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
            <Link href={"/users"} passHref>
              <Button as={"a"} colorScheme={"whiteAlpha"}>
                Cancel
              </Button>
            </Link>
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