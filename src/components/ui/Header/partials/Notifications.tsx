import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

const Notifications = () => (
  <HStack
    gap={"8"}
    mx={"8"}
    pr={"8"}
    py={"1"}
    color={"gray.300"}
    borderRightWidth={1}
    borderColor={"gray.700"}
  >
    <Icon as={RiNotificationLine} fontSize={"20"} />
    <Icon as={RiUserAddLine} fontSize={"20"} />
  </HStack>
);

export { Notifications };