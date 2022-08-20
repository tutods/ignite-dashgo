import { colors } from "./partials/colors";
import { styles } from "./partials/styles";
import { fonts } from "./partials/fonts";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors,
  fonts,
  styles,
});

export { theme };