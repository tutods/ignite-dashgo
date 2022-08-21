import type { NextPage } from "next";
import Head from "next/head";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "components/form/Input";

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | DashGo</title>
      </Head>

      <Flex
        w={"100%"}
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          as={"form"}
          width={"100%"}
          maxWidth={360}
          flexDir={"column"}
          p={"8"}
          borderRadius={8}
          bg={"gray.800"}
        >
          <Stack gap={"4"}>
            <Input
              isRequired
              label={"Email"}
              name={"email"}
              id={"email"}
              type={"email"}
            />

            <Input
              isRequired
              label={"Password"}
              name={"password"}
              id={"password"}
              type={"password"}
            />
          </Stack>

          <Button type={"submit"} mt={"6"} colorScheme={"pink"}>
            Sign In
          </Button>
        </Flex>
        {/*<Flex grow={1}></Flex>*/}
      </Flex>
    </>
  );
};

export default SignIn;