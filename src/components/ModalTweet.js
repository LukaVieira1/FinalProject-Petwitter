import { Outlet } from "react-router-dom";
import {
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
function ModalTweet() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        mt={"86vh"}
        ml="39vh"
        display={["flex", "none"]}
        position="fixed"
        onClick={onOpen}
        width={["48px", "40px"]}
        height={["48px", "40px"]}
        borderRadius={"50%"}
      >
        <AddIcon borderBottomRadius={"2px"} />
      </Button>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent mt="33px">
          <Flex borderBottom={"1px solid #EEEEEE"} justify={"space-between"}>
            <ModalCloseButton m={"14px 0 14px 30px"} position={"revert"}>
              Cancelar{" "}
            </ModalCloseButton>
            <ModalHeader p={"8px 8px 8px 0"}>
              <Button
                borderRadius={"10px"}
                variant="solid"
                width={"73px"}
                height={["32px"]}
                type="submit"
              >
                Petwittar
              </Button>
            </ModalHeader>
          </Flex>

          <ModalBody>Modal body</ModalBody>
        </ModalContent>
      </Modal>
      <Outlet />
    </>
  );
}

export default ModalTweet;
