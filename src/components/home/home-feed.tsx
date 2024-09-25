import { tweet } from "@/data/tweet"
import { TweetItem } from "../tweet/tweet-item"
import BlurFade from "@/components/magicui/blur-fade";

export const HomeFeed = ()=>{
    return(
    <div>
        <BlurFade key={tweet.id} delay={0.25 + 1 * 0.05} inView >
            <TweetItem tweet={tweet}/>
        </BlurFade>
        <BlurFade key={tweet.id + 2} delay={0.25 + 2 * 0.05} inView >
            <TweetItem tweet={tweet}/>
        </BlurFade>
        <BlurFade key={tweet.id + 3} delay={0.25 + 3 * 0.05} inView >
            <TweetItem tweet={tweet}/>
        </BlurFade>
        <BlurFade key={tweet.id + 4} delay={0.25 + 4 * 0.05} inView >
            <TweetItem tweet={tweet}/>
        </BlurFade>

    </div>
    )
}