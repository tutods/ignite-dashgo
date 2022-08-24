import { ElementType, ReactNode, useMemo } from "react";
import Link, { LinkProps } from "next/link";
import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = LinkProps & {
  icon: ElementType;
  text: ReactNode | string;
};

const NavLink = ({ icon, text, href, ...props }: Props) => {
  const router = useRouter();

  const isActive = useMemo(
    () => router.pathname.includes(String(href)),
    [router, href]
  );

  return (
    <Link href={href} {...props}>
      <ChakraLink
        color={isActive ? "pink.400" : ""}
        as={"a"}
        display={"flex"}
        alignItems={"center"}
        gap={"4"}
        transition={"color 0.3s"}
        _hover={{
          textDecoration: "none",
          color: "pink.400",
        }}
      >
        <Icon as={icon} fontSize={"20"} />
        <Text fontWeight={"medium"}>{text}</Text>
      </ChakraLink>
    </Link>
  );
};

export { NavLink };