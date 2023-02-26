import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = ({ size = "40px" }) => {
  return (
    <Link href="/">
      <Heading fontSize={size} className="logo">
        KULijana
      </Heading>
    </Link>
  );
};

export default Logo;
