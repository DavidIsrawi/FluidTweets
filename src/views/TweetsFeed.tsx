import { ITweet } from "../types"
import { Tweet } from "./Tweet"

interface TweetsFeedProps {
    tweets: ITweet[]
}
export const TweetsFeed = ({tweets}: TweetsFeedProps) => {
    return (
        <>
        {
            tweets ?
            tweets.map((tweet: ITweet, index: number) => {
                return <Tweet text={tweet.text} time={tweet.time} user={tweet.user} key={index}/>
            })
            :
            null
        }
        </>
    )
}