import { useLocation, useNavigate } from "react-router-dom";
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

// TODO: FEEDBACK AND NOTIFICATION FOR USER

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();
    //todo: send form data to back end
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const username = formData.get("username");

    navigate(from, { replace: true });
  }
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex direction={["column", "row"]}>
        <Flex
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundImage="url('images/registerBG.png')"
          direction={["column"]}
          p={["45px 0 25px 30px"]}
        >
          <Image
            width={["52px"]}
            height={["52px"]}
            src="images/stepSymbol.png"
            alt="stepSymbol"
          />
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
            Cadastro
          </Text>
          <FormControl mt={["32px"]}>
            <FormLabel htmlFor="email">Nome</FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              id="text"
              type="text"
              placeholder="Nome"
            />
            <FormLabel mt="16px" htmlFor="email">
              Email
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              id="email"
              type="email"
              placeholder="Email"
            />
            <FormLabel mt="16px" htmlFor="email">
              Nome de usuário
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              id="username"
              type="text"
              placeholder="EX.: billbuldog"
            />
            <FormLabel mt="16px" htmlFor="senha">
              Senha
            </FormLabel>
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
            <Text fontSize={["10px"]} mt={["4px"]}>
              Deve conter no mínimo um número e uma letra maiúscula{" "}
            </Text>
            <ReachLink to="/feed">
              <Button
                variant="solid"
                mt="40px"
                width={["100%"]}
                height={["40px"]}
                type="submit"
              >
                Registrar
              </Button>
            </ReachLink>
          </FormControl>
          <Text mt={["24px"]} alignSelf={["flex-start"]}>
            Ja possui cadastro?
          </Text>
          <Link
            textDecoration={["underline"]}
            color="cyan.400"
            alignSelf={["flex-start"]}
            as={ReachLink}
            to="/login"
          >
            Faça login
          </Link>
          <Image
            mt={["27px"]}
            width={["180px"]}
            src={["images/cyanLogo.png"]}
            alt="petwitterLogo"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
