import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Profile as ProfileType } from "shared/@types/Profile";

type Props = {
  profile: ProfileType;
  showAvatar?: boolean;
  showProfileData?: boolean;
  direction?: "right" | "left";
};

const Profile = ({
  profile,
  showAvatar = true,
  showProfileData = true,
  direction = "right",
}: Props) => {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={direction === "left" ? "row-reverse" : "row"}
      justifyContent={direction === "left" ? "flex-end" : "flex-start"}
      gap={"2"}
    >
      {showProfileData && (
        <Box mr={"4"} textAlign={direction}>
          <Text>{profile.name}</Text>
          <Text color={"gray.300"} fontSize={"small"}>
            {profile.email}
          </Text>
        </Box>
      )}

      {showAvatar && (
        <Avatar size={"md"} name={profile.name} src={profile.photo} />
      )}
    </Flex>
  );
};

export { Profile };