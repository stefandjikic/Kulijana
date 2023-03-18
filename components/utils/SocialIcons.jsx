import { Flex, Image, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import instagramIcon from "../../public/assets/icons/instagram.svg";
import instagramIconLight from "../../public/assets/icons/instagram-light.svg";
import facebookIcon from "../../public/assets/icons/facebook.svg";
import facebookIconLight from "../../public/assets/icons/facebook-light.svg";

const SocialIcons = ({ light = false}) => {
  const instagramIconResolver = useColorModeValue(instagramIcon, instagramIconLight);
  const facebookIconResolver = useColorModeValue(facebookIcon, facebookIconLight);

  return (
    <Flex alignItems="center" justifyContent='space-between' w='58px'>
      {/* <a target="_blank" href="https://icons8.com/icon/5eT5OnLluNOx/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>◊
<a target="_blank" href="https://icons8.com/icon/QU5mfsH8tIqo/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
      <Link isExternal href="https://www.instagram.com/kulijana.rs/">
        <Image alt="instagram" src={light ? instagramIconLight.src :instagramIconResolver.src} width="25px" />
      </Link>
      <Link isExternal href="https://www.facebook.com/kulijana.rs">
        <Image alt="facebook" src={light ? facebookIconLight.src : facebookIconResolver.src} width="25px" />
      </Link>
    </Flex>
  );
};

export default SocialIcons;
