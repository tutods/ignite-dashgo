import type { NextPage } from "next";
import Head from "next/head";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

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
            <FormControl isRequired>
              <FormLabel htmlFor={"email"} fontSize={"sm"} fontWeight={"bold"}>
                Email
              </FormLabel>
              <Input
                placeholder={"Insert your email"}
                name={"email"}
                id={"email"}
                type={"email"}
                bgColor={"gray.900"}
                size={"lg"}
                variant={"filled"}
                focusBorderColor={"pink.500"}
                _placeholder={{
                  fontWeight: 300,
                }}
                _hover={{
                  bgColor: "gray.900",
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                htmlFor={"password"}
                fontSize={"sm"}
                fontWeight={"bold"}
              >
                Password
              </FormLabel>
              <Input
                placeholder={"Insert your password"}
                name={"password"}
                id={"password"}
                type={"password"}
                size={"lg"}
                bgColor={"gray.900"}
                variant={"filled"}
                focusBorderColor={"pink.500"}
                _placeholder={{
                  fontWeight: 300,
                }}
                _hover={{
                  bgColor: "gray.900",
                }}
              />
            </FormControl>
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