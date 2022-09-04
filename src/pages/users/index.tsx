import Head from "next/head";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { PanelLayout } from "components/layouts/Panel";
import { NextPageWithLayout } from "shared/@types/Layout";
import Link from "next/link";
import { RiUserAddLine } from "react-icons/ri";
import { Pagination } from "components/Pagination";
import { Profile } from "components/ui/Profile";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "shared/services/api/requests/users";

const UsersList: NextPageWithLayout = () => {
  const { data, isLoading, error } = useQuery(["users"], getUsers);
  console.log(data);

  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Head>
        <title>Users | DashGo</title>
      </Head>
      <Box flex={1} borderRadius={"8"} bg={"gray.800"} p={"8"}>
        <Flex mb={"8"} justifyContent={"space-between"} alignItems={"center"}>
          <Heading as={"h2"} size={"lg"} fontWeight={"normal"}>
            Users
          </Heading>

          <Link href={"/users/new"} passHref>
            <Button
              as={"a"}
              size={"sm"}
              fontSize={"sm"}
              colorScheme={"pink"}
              leftIcon={<Icon as={RiUserAddLine} fontSize={"20"} />}
            >
              Create new user
            </Button>
          </Link>
        </Flex>

        {isLoading ? (
          <Flex justifyContent={"center"}>
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Sorry!</AlertTitle>
              <AlertDescription>
                But it&apos;s not possible show the users list now.
              </AlertDescription>
            </Alert>
          </Flex>
        ) : (
          <>
            <Table colorScheme={"whiteAlpha"}>
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color={"gray.300"} width={"8"}>
                    <Checkbox colorScheme={"pink"} />
                  </Th>
                  <Th>User</Th>
                  {isWideVersion && <Th>Creation Date</Th>}
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((user) => (
                  <Tr key={user.email}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme={"pink"} />
                    </Td>
                    <Td>
                      <Box>
                        <Profile
                          profile={{
                            name: user.name,
                            email: user.email,
                          }}
                          direction={"left"}
                        />
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Pagination mt={"8"} />
          </>
        )}
      </Box>
    </>
  );
};

UsersList.getLayout = (page: ReactElement) => <PanelLayout>{page}</PanelLayout>;

export default UsersList;