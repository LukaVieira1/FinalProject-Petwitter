import { Container, Flex, Image, Text } from "@chakra-ui/react";

const Tweet = (props) => {
  const { photo, name, username, postTime, tweet } = props;

  return (
    <Flex
      borderBottom={"1px solid #EEEEEE"}
      borderRight={["none", "1px solid #EEEEEE"]}
      borderLeft={["none", "1px solid #EEEEEE"]}
      p={["20px 16px 16px 16px"]}
    >
      <Image
        width={["48px", "40px"]}
        height={["48px", "40px"]}
        borderRadius={"50%"}
        src={photo}
        alt={username}
      />
      <Flex pl={"16px"} direction={"column"}>
        <Flex direction={"row"}>
          <Text
            color={["#757575", "black"]}
            lineHeight={["19px", "20px"]}
            fontWeight={"bold"}
          >
            {name}
          </Text>
          <Text
            lineHeight={["17px", "20px"]}
            color={["#757575", "#828282"]}
            ml={["4px"]}
          >
            @{username} •
          </Text>
          <Text
            lineHeight={["17px", "20px"]}
            color={["#757575", "#828282"]}
            ml={["4px"]}
          >
            {postTime}
          </Text>
        </Flex>
        <Text color={["#141619", "#333333"]} mt={"4px"}>
          {tweet}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Tweet;
