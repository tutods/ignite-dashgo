import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

type Props = InputProps & {
  label?: ReactNode;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, isRequired, error, ...props },
  ref
) => {
  return (
    <FormControl isRequired={isRequired ?? false} isInvalid={!!error}>
      {label && (
        <FormLabel
          htmlFor={(props.id || props.name) ?? ""}
          fontSize={"sm"}
          fontWeight={"bold"}
        >
          {label}
        </FormLabel>
      )}
      <ChakraInput
        {...props}
        isRequired={isRequired}
        ref={ref}
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
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export { Input };