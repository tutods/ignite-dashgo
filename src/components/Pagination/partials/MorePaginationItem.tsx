import { Button } from "@chakra-ui/react";

const MorePaginationItem = () => {
  const STATES_STYLE = {
    bgColor: "gray.700",
  };

  return (
    <Button
      disabled={true}
      size={"sm"}
      fontSize={"xs"}
      width={"4"}
      bgColor={"gray.700"}
      transition={"all .3s"}
      opacity={0.3}
      cursor={"not-allowed"}
      _hover={STATES_STYLE}
      _active={STATES_STYLE}
      _focus={STATES_STYLE}
      _disabled={STATES_STYLE}
    >
      ...
    </Button>
  );
};

export { MorePaginationItem };