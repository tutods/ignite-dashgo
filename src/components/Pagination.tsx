import { Box, Button, HStack } from "@chakra-ui/react";

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
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"4"}
          colorScheme={"pink"}
          transition={"all .3s"}
          disabled
          _disabled={DISABLE_STYLE}
          _hover={HOVER_STYLE}
        >
          1
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"4"}
          bgColor={"gray.700"}
          transition={"all .3s"}
          _hover={HOVER_STYLE}
        >
          2
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"4"}
          bgColor={"gray.700"}
          transition={"all .3s"}
          _hover={HOVER_STYLE}
        >
          3
        </Button>
      </HStack>
    </HStack>
  );
};

export { Pagination };