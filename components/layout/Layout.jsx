import React from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>{title || "Kulijana - Portal o svakodnevnim temama"}</title>
        <meta
          name="description"
          content="Kulijana - Portal posvećen informisanju, zabavi i temama iz svakodnevnog života"
        />
        <meta name="og:title" content={title || "Kulijana - Portal o svakodnevnim temama"} />
        <meta
          name="og:description"
          content="Kulijana - Portal posvećen informisanju, zabavi i temama iz svakodnevnog života"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavigation />
      <Container maxW="1280px">
        <main style={{ minHeight: "80vh" }}>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
