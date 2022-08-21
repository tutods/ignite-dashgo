import { ReactNode } from "react";
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";

type Props = InputProps & {
  label?: ReactNode;
  isRequired?: boolean;
};

const Input = ({ label, isRequired, ...props }: Props) => {
  return (
    <FormControl isRequired={isRequired ?? false}>
      {label ? (
        <FormLabel htmlFor={props.id ?? ""} fontSize={"sm"} fontWeight={"bold"}>
          {label}
        </FormLabel>
      ) : null}
      <ChakraInput
        {...props}
        bgColor={"gray.900"}
        size={"lg"}
        variant={"filled"}
        focusBorderColor={"pink.500"}
        _placeholder={{
          fontWeight: 300,
        }}
        _hover={{
          bgColor: "gray.900",
        }}
      />
    </FormControl>
  );
};

export { Input };