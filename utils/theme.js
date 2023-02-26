import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    body: {
      bg: mode(
        // custom light mode color
        "#fff1e5",
        // dark mode value retrieved from theme
        props.theme.semanticTokens.colors["chakra-body-bg"]._dark
      )(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  // styles: {
  //   global: (props) => ({
  //     body: {
  //       bg: mode(
  //         // custom light mode color
  //         "#fff1e5",
  //         // dark mode value retrieved from theme
  //         props.theme.semanticTokens.colors["chakra-body-bg"]._dark
  //       )(props),
  //     },
  //   }),
  // },
});

export default theme;
