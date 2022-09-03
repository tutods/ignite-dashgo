import Head from "next/head";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactElement, useEffect } from "react";
import { PanelLayout } from "components/layouts/Panel";
import { NextPageWithLayout } from "shared/@types/Layout";
import Link from "next/link";
import { RiUserAddLine } from "react-icons/ri";
import { Pagination } from "components/Pagination";
import { Profile } from "components/ui/Profile";

const UsersList: NextPageWithLayout = () => {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme={"pink"} />
              </Td>
              <Td>
                <Box>
                  <Profile
                    profile={{
                      name: "Daniel Sousa",
                      email: "geral@daniel-sousa.com",
                    }}
                    direction={"left"}
                  />
                </Box>
              </Td>
              {isWideVersion && <Td>22th of April, 2022</Td>}
            </Tr>
          </Tbody>
        </Table>

        <Pagination mt={"8"} />
      </Box>
    </>
  );
};

UsersList.getLayout = (page: ReactElement) => <PanelLayout>{page}</PanelLayout>;

export default UsersList;