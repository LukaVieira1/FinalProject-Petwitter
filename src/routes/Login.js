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
} from "@chakra-ui/react";
import { useState } from "react";

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
    <div>
      <Flex backgroundImage="url('images/loginBG.png')"></Flex>
      <Flex>
        <FormControl m={["32px 24px 32px 32px"]}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            width={["296px"]}
            height={["40px"]}
            id="email"
            type="email"
            placeholder="Email"
          />
          <FormLabel mt="32px" htmlFor="senha">
            Senha
          </FormLabel>
          <InputGroup>
            <Input
              width={["296px"]}
              height={["40px"]}
              id="Senha"
              type={show ? "text" : "password"}
              placeholder="Senha"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            variant="solid"
            mt="40px"
            width={["296px"]}
            height={["40px"]}
            type="submit"
          >
            Entrar
          </Button>
        </FormControl>
      </Flex>
    </div>
  );
}

export default Login;
