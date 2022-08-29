import { Box, HStack, Stack, StyleProps } from "@chakra-ui/react";
import { PaginationItem } from "components/Pagination/partials/PaginationItem";

type Props = StyleProps & {
  totalOfPages?: number;
};

const Pagination = ({ totalOfPages, ...props }: Props) => {
  return (
    <Stack
      {...props}
      gap={"2"}
      direction={["column", "column", "row"]}
      justify={"space-between"}
      align={"center"}
    >
      <Box fontSize={"sm"}>
        <strong>0</strong> - <strong>10</strong> of 100
      </Box>
      <HStack gap={"1"}>
        <PaginationItem page={1} isCurrent />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
      </HStack>
    </Stack>
  );
};

export { Pagination };