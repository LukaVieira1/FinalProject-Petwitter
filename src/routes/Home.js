import Tweet from "../components/Tweet";
import { ModalTweet } from "../components/ModalTweet";
import { Flex, Image, Textarea, Button, FormControl } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllPetweets, postPetweet } from "../services/petweets";
import { useChange } from "../context/petweetChange-context";

const Home = () => {
  const [petweets, setPetweets] = useState([]);
  const { petweetsChange, setPetweetsChange } = useChange();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("content");

    try {
      await postPetweet({ content });
    } catch (error) {
      console.log(error);
    }
    setPetweetsChange(!petweetsChange);

    event.target.reset();
  }
  useEffect(() => {
    try {
      const request = async () => {
        const response = await getAllPetweets();
        setPetweets(response.data.data.petweets);
      };
      request();
    } catch (error) {
      console.log(error);
    }
  }, [petweetsChange]);

  return (
    <>
      {/* TODO: characters limit and indicator  */}
      <Flex
        p={"34px 0 0 27px"}
        borderBottom={"1px solid rgba(0, 0, 0, 0.1)"}
        boxShadow={"0px 10px 0px #E7ECF0;"}
        borderRight={"1px solid #EEEEEE"}
        borderLeft={"1px solid #EEEEEE"}
        display={["none", "flex"]}
      >
        <Image
          width={"48px"}
          height={"48px"}
          borderRadius={"50%"}
          src={
            "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
          }
          alt={"avatar"}
        />
        <FormControl as={"form"} onSubmit={handleSubmit}>
          <Flex>
            <Textarea
              resize={"none"}
              focusBorderColor="none"
              border={"none"}
              placeholder="O que está acontecendo?"
              name="content"
            />
            <Button
              m={"103px 30px 25px 0"}
              mr={"30px"}
              mt="103px"
              mb={"25px"}
              borderRadius={"10px"}
              variant="solid"
              width={"92px"}
              height={["40px"]}
              type="submit"
            >
              Petwittar
            </Button>
          </Flex>
        </FormControl>
      </Flex>

      {petweets?.map((user) => (
        <Tweet
          key={user.user.id}
          name={user.user.name}
          tweet={user.content}
          postTime={user.createdAt}
          username={user.user.username}
          photo={
            "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
          }
        />
      ))}
      <ModalTweet />
    </>
  );
};

export default Home;
