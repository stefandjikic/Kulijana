import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/theme";
import "@/styles/globals.css";
import { ArticlesContextProvider } from "@/context/ArticlesContext";

export default function App({ Component, pageProps }) {
  return (
    <ArticlesContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ArticlesContextProvider>
  );
}
