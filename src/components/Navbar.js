import { Link, Outlet } from "react-router-dom";
import {
  Flex,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { useRef } from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Container p={0} maxW={"container.xl"}>
      <Grid templateColumns="repeat(9, 1fr)">
        <GridItem colSpan={2}> </GridItem>
        <GridItem colSpan={1} />
      </Grid>
      <Flex
        boxShadow={["0px 2px 4px rgba(33, 33, 33, 0.2)", "none"]}
        p={["16px 0 14px 16px", "24px 36px 0 36px"]}
        alignItems={["center", "flex-start"]}
        direction={["row", "column"]}
        height={["48px"]}
      >
        <Button
          ref={btnRef}
          onClick={onOpen}
          display={["flex", "none"]}
          variant={"unstyled"}
          outline={"none"}
          height={"35px"}
          color={"cyan.400"}
          backgroundColor={"white"}
        >
          <Image height="16px" src="images/hamburguerButt.png" alt="Logo" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Flex pt={"40px"} direction={"column"}>
              <DrawerHeader alignSelf={"center"}>
                <Image
                  width={"56px"}
                  height={"56px"}
                  borderRadius={"50%"}
                  src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                  alt="user"
                />
              </DrawerHeader>

              <DrawerBody p={"0"} mt={"36px"}>
                <Flex direction={"column"}>
                  <Button colorScheme="cyan.400" variant="menu">
                    <Link to={"/home"}>Home</Link>
                  </Button>
                  <Button colorScheme="cyan.400" variant="menu">
                    {/* TODO: ROUTE TO MY PROFILE */}
                    <Link to={"/???"}>Meu Petfil</Link>
                  </Button>
                </Flex>
              </DrawerBody>
            </Flex>
          </DrawerContent>
        </Drawer>

        <Image
          height={["28px", "54px"]}
          width={["116px", "225px"]}
          ml={["84px", "0"]}
          src="images/cyanLogo.png"
          alt="Logo"
        />
        <Flex ml={"50px"} display={["none", "flex"]} direction="column">
          <Button fontWeight={"bold"} colorScheme="cyan.400" variant="menu">
            <Link to={"/home"}>
              <Image
                height={["17px"]}
                width={["20px"]}
                src="images/homeIcon.png"
                alt="Icon"
              />
              Home
            </Link>
          </Button>
          <Button fontWeight={"bold"} colorScheme="cyan.400" variant="menu">
            {/* TODO: ROUTE TO MY PROFILE */}
            <Link to={"/???"}>Meu Petfil</Link>
          </Button>
        </Flex>
      </Flex>
      <Outlet />
    </Container>
  );
}

export default Navbar;
