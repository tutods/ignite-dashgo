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
  Link as ChakraLink,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactElement, useCallback, useState } from "react";
import { PanelLayout } from "components/layouts/Panel";
import { NextPageWithLayout } from "shared/@types/Layout";
import Link from "next/link";
import { RiUserAddLine } from "react-icons/ri";
import { Pagination } from "components/Pagination";
import { Profile } from "components/ui/Profile";
import { useUsers } from "shared/hooks/users/useUsers";
import { queryClient } from "shared/services/queryClient";
import { getUser } from "shared/services/api/requests/users";

const UsersList: NextPageWithLayout = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isFetching, isError } = useUsers(page);

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(["user", userId], () => getUser(userId), {
      staleTime: 1000 * 60 * 10, // 10 minutes
    });
  };

  return (
    <>
      <Head>
        <title>Users | DashGo</title>
      </Head>
      <Box flex={1} borderRadius={"8"} bg={"gray.800"} p={"8"}>
        <Flex mb={"8"} justifyContent={"space-between"} alignItems={"center"}>
          <Heading
            as={"h2"}
            display={"flex"}
            alignItems={"center"}
            gap={"4"}
            size={"lg"}
            fontWeight={"normal"}
          >
            Users
            {!isLoading && isFetching && (
              <Spinner color={"gray.500"} size={"sm"} />
            )}
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
        ) : isError ? (
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
                {data.users.map((user) => (
                  <Tr key={user.email}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme={"pink"} />
                    </Td>
                    <Td>
                      <Box>
                        <ChakraLink
                          _hover={{
                            textDecoration: "none",
                          }}
                          onMouseEnter={() => handlePrefetchUser(user.id)}
                        >
                          <Profile
                            profile={{
                              name: user.name,
                              email: user.email,
                            }}
                            direction={"left"}
                          />
                        </ChakraLink>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Pagination
              currentPage={page}
              totalOfResults={data.count}
              onPageChange={handlePageChange}
              mt={"8"}
            />
          </>
        )}
      </Box>
    </>
  );
};

UsersList.layout = (page: ReactElement) => <PanelLayout>{page}</PanelLayout>;

export default UsersList;