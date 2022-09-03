import type { NextPage } from "next";
import Head from "next/head";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "components/form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  SignInFormData,
  SignInFormSchema,
} from "shared/data/schemas/pages/SignIn.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const SignIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { isSubmitting, errors, isValid },
  } = useForm<SignInFormData>({
    resolver: yupResolver(SignInFormSchema),
    mode: "onChange",
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    // Clear errors first
    clearErrors();
  };

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
          onSubmit={handleSubmit(handleSignIn)}
          width={"100%"}
          maxWidth={360}
          flexDir={"column"}
          p={"8"}
          borderRadius={8}
          bg={"gray.800"}
        >
          <Stack gap={"4"}>
            <Input
              {...register("email")}
              isRequired
              errorBorderColor={"red.500"}
              label={"Email"}
              name={"email"}
              type={"email"}
              error={errors.email}
            />

            <Input
              {...register("password")}
              isRequired
              label={"Password"}
              name={"password"}
              type={"password"}
              error={errors.password}
            />
          </Stack>

          <Button
            type={"submit"}
            mt={"6"}
            colorScheme={"pink"}
            isDisabled={!isValid}
            isLoading={isSubmitting}
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;