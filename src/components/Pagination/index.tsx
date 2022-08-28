import { Box, HStack } from "@chakra-ui/react";
import { PaginationItem } from "components/Pagination/partials/PaginationItem";

type Props = {
  totalOfPages?: number;
};

const Pagination = ({ totalOfPages }: Props) => {
  const HOVER_STYLE = {
    bg: "gray.500",
  };

  const DISABLE_STYLE = {
    bg: "pink.500",
    cursor: "default",
  };

  return (
    <HStack
      mt={"8"}
      spacing={"6"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box fontSize={"sm"}>
        <strong>0</strong> - <strong>10</strong> of 100
      </Box>
      <HStack spacing={"2"}>
        <PaginationItem page={1} isCurrent />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
      </HStack>
    </HStack>
  );
};

export { Pagination };