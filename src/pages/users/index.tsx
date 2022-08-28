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
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { PanelLayout } from "components/layouts/Panel";
import { NextPageWithLayout } from "shared/@types/Layout";
import Link from "next/link";
import { RiUserAddLine } from "react-icons/ri";
import { Pagination } from "components/Pagination";

const UsersList: NextPageWithLayout = () => {
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

          <Link href={"/users/new"}>
            <Button
              as={"a"}
              cursor={"pointer"}
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
              <Th px={"6"} color={"gray.300"} width={"8"}>
                <Checkbox colorScheme={"pink"} />
              </Th>
              <Th>User</Th>
              <Th>Creation Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={"6"}>
                <Checkbox colorScheme={"pink"} />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight={"bold"}>Daniel Sousa</Text>
                  <Text fontSize={"sm"} color={"gray.300"}>
                    geral@daniel-sousa.com
                  </Text>
                </Box>
              </Td>
              <Td>22th of April, 2022</Td>
            </Tr>
          </Tbody>
        </Table>

        <Pagination />
      </Box>
    </>
  );
};

UsersList.getLayout = (page: ReactElement) => <PanelLayout>{page}</PanelLayout>;

export default UsersList;