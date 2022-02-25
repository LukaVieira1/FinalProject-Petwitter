import Tweet from "../components/Tweet";
import { ModalTweet } from "../components/ModalTweet";
import { Flex, Image, Textarea, Button } from "@chakra-ui/react";
//TODO: RECIEVE DATA FROM DATABASE
const tempData = [
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
  {
    id: 2,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "1h",
  },
  {
    id: 2,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "1h",
  },
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
  {
    id: 1,
    name: "Luka Vieira",
    tweet:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    username: "lvieira",
    postTime: "2s",
  },
];

const Home = () => {
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
          alt={""}
        />
        <Textarea
          resize={"none"}
          focusBorderColor="none"
          border={"none"}
          placeholder="O que está acontecendo?"
        />
        <Flex m={"147px 30px 25px 0"}>
          <Button
            borderRadius={"10px"}
            variant="solid"
            width={"92px"}
            height={["40px"]}
            type="submit"
          >
            Petwittar
          </Button>
        </Flex>
      </Flex>

      {tempData?.map((user) => (
        <Tweet
          name={user.name}
          tweet={user.tweet}
          postTime={user.postTime}
          username={user.username}
          photo={user.photo}
        />
      ))}
      <ModalTweet />
    </>
  );
};

export default Home;
