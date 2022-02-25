import client from "../providers/client";

export const getAllPetweets = () => client.get("/petweets");

export const postPetweet = (data) => client.post("/petweets", data);
