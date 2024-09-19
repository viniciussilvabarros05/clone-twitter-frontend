import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet:Tweet = {
    id: 123,
    user: user,
    body: "Outro dia mágico",
    likeCount: 523,
    image:"https://as2.ftcdn.net/v2/jpg/04/54/59/87/1000_F_454598741_qu0ZzTneFYwfAFEYSryOXJRFes6PPHqg.jpg",
    commentCount: 61,
    liked: false,
    retweeted: false,
    dataPost: new Date(2024,8,1,10,0,0),
    retweetCount: 0
}