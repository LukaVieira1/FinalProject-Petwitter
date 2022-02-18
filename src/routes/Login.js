import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {
  Flex,
  Text,
  FormControl,
  Input,
  FormLabel,
  Button,
  InputGroup,
  InputRightElement,
  Image,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundImage="url('images/loginBG.png')"
        direction={["column"]}
        p={["45px 0 25px 30px"]}
      >
        <Image
          width={["52px"]}
          height={["52px"]}
          src="images/stepSymbol.png"
          alt="stepSymbol"
        />
        <Text
          mt={["40px"]}
          fontSize="36px"
          color={["#FFFFFF"]}
          lineHeight={["49px"]}
        >
          Comece agora. Conecte-se já.
        </Text>
      </Flex>
      <Flex
        p={["30px 32px 24px 32px"]}
        direction={["column"]}
        alignItems={"center"}
      >
        <Text
          color={["#212121"]}
          fontSize={["24px"]}
          lineHeight={["40px"]}
          fontWeight={["600px"]}
          alignSelf={["flex-start"]}
        >
          Login
        </Text>
        <FormControl mt={["32px"]}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            width={["100%"]}
            height={["40px"]}
            id="email"
            type="email"
            placeholder="Email"
          />
          <Flex justify={["space-between"]}>
            <FormLabel mt="32px" htmlFor="senha">
              Senha
            </FormLabel>
            <Link
              textDecoration={["underline"]}
              mt="32px"
              color="cyan.400"
              as={ReachLink}
              to="/recovery-password"
            >
              Esqueci minha senha
            </Link>
          </Flex>
          <InputGroup>
            <Input
              width={["100%"]}
              height={["40px"]}
              id="Senha"
              type={show ? "text" : "password"}
              placeholder="Senha"
            />
            <InputRightElement width="4.5rem">
              {/* TODO: FIX THE ICON (OUTLINE BORDER) */}
              <Button
                variant={"unstyled"}
                outline={"none"}
                height={"30px"}
                color={"black"}
                backgroundColor={"white"}
                onClick={handleClick}
              >
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <ReachLink to="/feed">
            <Button
              variant="solid"
              mt="40px"
              width={["100%"]}
              height={["40px"]}
              type="submit"
            >
              Entrar
            </Button>
          </ReachLink>
        </FormControl>
        <Text mt={["24px"]} alignSelf={["flex-start"]}>
          Ainda não possui uma conta?
        </Text>
        <Link
          textDecoration={["underline"]}
          color="cyan.400"
          alignSelf={["flex-start"]}
          as={ReachLink}
          to="/register"
        >
          Cadastre-se
        </Link>
        <Image
          mt={["62px"]}
          width={["180px"]}
          src={["images/cyanLogo.png"]}
          alt="petwitterLogo"
        />
      </Flex>
    </>
  );
}

export default Login;
