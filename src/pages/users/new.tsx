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
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import {
  CreateUserFormData,
  CreateUserFormSchema,
} from "shared/data/schemas/pages/CreateUser.schema";

const CreateUser: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { isSubmitting, errors, isValid },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(CreateUserFormSchema),
    mode: "onChange",
  });

  const handleUserCreation: SubmitHandler<CreateUserFormData> = async (
    data
  ) => {
    // Clear errors first
    clearErrors();
  };

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

        <VStack
          gap={"8"}
          as={"form"}
          onSubmit={handleSubmit(handleUserCreation)}
        >
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
            <Input
              {...register("name")}
              name={"name"}
              id={"name"}
              label={"User Name"}
              isRequired
              error={errors.name}
            />
            <Input
              {...register("email")}
              type={"email"}
              name={"email"}
              label={"User Email"}
              isRequired
              error={errors.email}
            />
            <Input
              {...register("password")}
              type={"password"}
              name={"password"}
              label={"Password"}
              isRequired
              error={errors.password}
            />
            <Input
              {...register("confirmPassword")}
              type={"password"}
              name={"confirmPassword"}
              label={"Confirm Password"}
              isRequired
              error={errors.confirmPassword}
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
            <Button
              type={"submit"}
              colorScheme={"pink"}
              isDisabled={!isValid}
              isLoading={isSubmitting}
            >
              Save
            </Button>
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