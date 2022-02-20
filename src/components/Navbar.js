import { Link, Outlet } from "react-router-dom";
import { Flex, Image, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Flex
        boxShadow={["0px 2px 4px rgba(33, 33, 33, 0.2)"]}
        p={["16px 0 14px 16px"]}
        alignItems={"center"}
        height={["48px"]}
      >
        {/* TODO: FIX BORDERS */}
        <Button
          display={["flex", "none"]}
          variant={"unstyled"}
          outline={"none"}
          height={"35px"}
          color={"cyan.400"}
          backgroundColor={"white"}
        >
          <Image height="16px" src="images/hamburguerButt.png" alt="Logo" />
        </Button>
        <Image
          height={["28px"]}
          width={["116px"]}
          ml={["84px"]}
          src="images/cyanLogo.png"
          alt="Logo"
        />
      </Flex>
      <Outlet />
    </>
  );
}

export default Navbar;
