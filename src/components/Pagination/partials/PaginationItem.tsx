import { Button } from "@chakra-ui/react";

type Props = {
  page: number;
  isCurrent?: boolean;
  onPageChange?: (page: number) => void;
};

const HOVER_STYLE = {
  bg: "gray.500",
};

const DISABLE_STYLE = {
  bg: "pink.500",
  cursor: "default",
};

const PaginationItem = ({ page, isCurrent, onPageChange, ...props }: Props) => {
  const ITEM_STYLE = isCurrent
    ? {
        colorScheme: "pink",
      }
    : {
        bg: "gray.700",
      };

  return (
    <Button
      {...props}
      size={"sm"}
      fontSize={"xs"}
      width={"4"}
      sx={ITEM_STYLE}
      transition={"all .3s"}
      disabled={isCurrent}
      _disabled={DISABLE_STYLE}
      _hover={!isCurrent ? HOVER_STYLE : {}}
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  );
};

export { PaginationItem };