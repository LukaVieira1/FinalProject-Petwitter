import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { postPetweet } from "../services/petweets";
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
  FormControl,
} from "@chakra-ui/react";
export function ModalTweet() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [petweetsChange, setPetweetsChange] = useState(false);

  async function handleSubmit(event) {
    // event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("content");

    try {
      await postPetweet({ content });
    } catch (error) {
      console.log(error);
    }
    event.target.reset();
  }

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
            <ModalHeader p={"8px 8px 8px 0"}></ModalHeader>
          </Flex>

          <ModalBody>
            <FormControl as={"form"} onSubmit={handleSubmit}>
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
                  name="content"
                />
                <Button
                  position={"fixed"}
                  top="49px"
                  right={"8px"}
                  borderRadius={"10px"}
                  variant="solid"
                  width={"73px"}
                  height={["32px"]}
                  type="submit"
                >
                  Petwittar
                </Button>
              </Flex>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
