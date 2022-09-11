import { Box, Flex, Stack, StyleProps } from "@chakra-ui/react";
import { PaginationItem } from "components/Pagination/partials/PaginationItem";
import { MorePaginationItem } from "components/Pagination/partials/MorePaginationItem";

type Props = StyleProps & {
  totalOfResults: number;
  currentPage?: number;
  perPage?: number;
  onPageChange: (page: number) => void;
};

const SIBLINGS_COUNT = 1;

const generatePages = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
};

const Pagination = ({
  totalOfResults,
  currentPage = 1,
  perPage = 10,
  onPageChange,
  ...props
}: Props) => {
  const LAST_PAGE = Math.ceil(totalOfResults / perPage);
  const previousPages =
    currentPage > 1
      ? generatePages(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : [];
  const nextPages =
    currentPage < LAST_PAGE
      ? generatePages(
          currentPage,
          Math.min(currentPage + SIBLINGS_COUNT, LAST_PAGE)
        )
      : [];

  return (
    <Stack
      {...props}
      gap={"2"}
      direction={["column", "column", "row"]}
      justify={"space-between"}
      align={"center"}
    >
      <Box fontSize={"sm"}>
        Page <strong>{currentPage}</strong> of <strong>{LAST_PAGE}</strong> (
        {totalOfResults} results)
      </Box>
      <Flex gap={"2"}>
        {currentPage > 1 + SIBLINGS_COUNT && (
          <>
            <PaginationItem onPageChange={onPageChange} page={1} />
            {currentPage > 2 + SIBLINGS_COUNT && <MorePaginationItem />}
          </>
        )}

        {previousPages &&
          previousPages.map((page) => (
            <PaginationItem
              key={page}
              onPageChange={onPageChange}
              page={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          page={currentPage}
          isCurrent
        />

        {nextPages &&
          nextPages.map((page) => (
            <PaginationItem
              key={page}
              onPageChange={onPageChange}
              page={page}
            />
          ))}

        {currentPage + SIBLINGS_COUNT < LAST_PAGE && (
          <>
            {currentPage + 1 + SIBLINGS_COUNT < LAST_PAGE && (
              <MorePaginationItem />
            )}
            <PaginationItem onPageChange={onPageChange} page={LAST_PAGE} />
          </>
        )}
      </Flex>
    </Stack>
  );
};

export { Pagination };