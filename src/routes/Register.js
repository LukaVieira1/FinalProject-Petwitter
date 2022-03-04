import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { register } from "../services/auth";
// TODO: FEEDBACK AND NOTIFICATION FOR USER

function Register() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const username = formData.get("username");

    const data = {
      email,
      password,
      name,
      username,
    };
    try {
      await register(data);
      navigate("/login", { replace: true });
    } catch (error) {
      //TODO: ALERTA TOASTY CHAKRA
      console.log(error);
    }
  }
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex direction={["column", "row"]}>
        <Flex
          width={["flex", "50%"]}
          height={["flex", "100vh"]}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundImage={[
            "url('images/registerBG.png')",
            "url('images/fullRegisterBG.png')",
          ]}
          direction={["column"]}
          p={["45px 0 25px 30px", "309px 187px 308px 162px"]}
        >
          <Image
            display={["none", "flex"]}
            minWidth="418px"
            src="images/whiteLogo.png"
            alt="logo"
          />
          <Image
            display={["flex", "none"]}
            width={["52px"]}
            height={["52px"]}
            src="images/whitestepSymbol.png"
            alt="stepSymbol"
          />
        </Flex>
        <Flex
          width={["100%", "50%"]}
          p={["30px 32px 24px 32px", "60px 64px 50px 74px"]}
          direction={["column"]}
          alignItems={"center"}
        >
          <Image
            alignSelf={"flex-start"}
            display={["none", "flex"]}
            width={["76px"]}
            height={["76px"]}
            src="images/cyanStepSymbol.png"
            alt="stepSymbol"
            mb={["46px"]}
          />
          <Text
            color={["#212121"]}
            fontSize={["24px"]}
            lineHeight={["40px"]}
            fontWeight={["600px"]}
            alignSelf={["flex-start"]}
          >
            Cadastro
          </Text>
          <FormControl as={"form"} onSubmit={handleSubmit} mt={["32px"]}>
            <FormLabel htmlFor="email">Nome</FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="name"
              type="text"
              placeholder="Nome"
            />
            <FormLabel mt="16px" htmlFor="email">
              Email
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="email"
              type="email"
              placeholder="Email"
            />
            <FormLabel mt="16px" htmlFor="email">
              Nome de usuário
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="username"
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
                name="password"
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
            {/* TODO: Waiting figma instructions for this route and fix the button in mobile screen */}
            <Button
              variant="solid"
              mt="40px"
              width={["100%"]}
              height={["40px"]}
              type="submit"
            >
              Registrar
            </Button>
          </FormControl>
          <Flex alignSelf={"flex-start"} direction={["column", "row"]}>
            <Text mt={["24px"]}>Já possui cadastro?</Text>
            <Link
              mt={["0", "24px"]}
              ml={["0", "5px"]}
              textDecoration={["underline"]}
              color="cyan.400"
              as={ReachLink}
              to="/login"
            >
              Faça login
            </Link>
          </Flex>
          <Image
            display={["flex", "none"]}
            mt={["62px"]}
            width={["180px"]}
            src={["images/cyanLogo.png"]}
            alt="petwitterLogo"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Register;
