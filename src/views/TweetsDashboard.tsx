import { ITweet } from "../types"
import { TweetsFeed } from "./TweetsFeed";

interface TweetsDashboardProps {
    tweets: ITweet[],
    postTweet: (text: string) => void
}

export const TweetsDashboard = ({tweets, postTweet}: TweetsDashboardProps) => {
    
    const createTweet = (event: any) => {
        const tweetText = event.target.tweet.value;
        if (!tweetText) {
            throw new Error('You must enter a tweet before submitting!');
        }
        postTweet(tweetText);
        event.target.tweet.value = '';
        event.preventDefault();
    }
    
    return (
    <section id='tweets-dashboard-pane'>
        <div id='new-tweet-prompt'>
        <h2>Fluid Twitter</h2>
        <form onSubmit={createTweet}>
            <input id='tweet-prompt' type="text" placeholder="What's on your mind?" autoComplete='off' name="tweet"/>
            <input id='tweet-submit' type="submit" value="Tweet"/>
        </form>
        <br />
        </div>
        <TweetsFeed tweets={tweets}/>
    </section>
    )
}