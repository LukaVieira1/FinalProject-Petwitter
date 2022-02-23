import { Tweet } from "../components/Tweet";
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
  return tempData?.map((user) => (
    <Tweet
      name={user.name}
      tweet={user.tweet}
      postTime={user.postTime}
      username={user.username}
      photo={user.photo}
    />
  ));
};

export default Home;
