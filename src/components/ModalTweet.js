import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
export function ModalTweet() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* TODO: FIX BUTTON POSITION AND BORDERS */}
      <Button
        display={["flex", "none"]}
        position="fixed"
        bottom={"35px"}
        right={"16px"}
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
              {/* TODO: TAKE DATA FROM TEXT AREA AND SEND TO BACK END */}
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

          <ModalBody>
            <Flex>
              <Image
                width={"37px"}
                height={"37px"}
                borderRadius={"50%"}
                src={
                  "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                }
                alt={""}
              />
              <Textarea
                resize={"none"}
                focusBorderColor="none"
                border={"none"}
                placeholder="O que está acontecendo?"
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
