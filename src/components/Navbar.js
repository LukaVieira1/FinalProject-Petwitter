import { Outlet } from "react-router-dom";
import { Flex, Image, Container, Grid, GridItem, Icon } from "@chakra-ui/react";
import MenuHeader from "./MenuHeader";
import HomeIcon from "./HomeIcon";
import PetfilIcon from "./PetfilIcon";
import { useAuth } from "../context/auth-context";
import CustomLink from "./CustomLink";

function Navbar() {
  const auth = useAuth();
  return (
    <Container p={0} maxW={"container.xl"}>
      <Grid templateColumns="repeat(9, 1fr)">
        <GridItem colSpan={[0, 2]}>
          <Flex display={["none", "flex"]} direction="column">
            <Flex p={"24px 36px"}>
              <Image minWidth={"225px"} src="/images/cyanLogo.png" alt="Logo" />
            </Flex>

            <CustomLink to={"/home"}>
              <Icon mt={"5px"} mr="10px">
                <HomeIcon />
              </Icon>
              Home
            </CustomLink>
            <CustomLink to={`/profile/${auth.user.username}`}>
              <Icon mt={"5px"} mr="10px">
                <PetfilIcon />
              </Icon>
              Meu Petfil
            </CustomLink>
          </Flex>{" "}
        </GridItem>
        <GridItem colSpan={[9, 5]}>
          <MenuHeader />
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Navbar;
