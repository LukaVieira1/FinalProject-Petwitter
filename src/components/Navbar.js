import { Link, Outlet } from "react-router-dom";
import {
  Flex,
  Image,
  Button,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import MenuHeader from "./MenuHeader";

function Navbar() {
  return (
    <Container p={0} maxW={"container.xl"}>
      <Grid templateColumns="repeat(9, 1fr)">
        <GridItem colSpan={[0, 2]}>
          <Flex display={["none", "flex"]} direction="column">
            <Flex p={"24px 36px"}>
              <Image minWidth={"225px"} src="images/cyanLogo.png" alt="Logo" />
            </Flex>
            <Button fontWeight={"bold"} colorScheme="cyan.400" variant="menu">
              <Link to={"/home"}>Home</Link>
            </Button>
            <Button fontWeight={"bold"} colorScheme="cyan.400" variant="menu">
              {/* TODO: ROUTE TO MY PROFILE */}
              <Link to={"/???"}>Meu Petfil</Link>
            </Button>
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
