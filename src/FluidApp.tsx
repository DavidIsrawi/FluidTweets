import React from 'react';
import { ITweet } from './types';
import { Tweet } from './Tweet';
import { useTweets } from './hooks/useTweets';

export const FluidApp = () => {
    const [userNameDraft, setUserNameDraft] = React.useState<string>("");
    const [userName, setUserName] = React.useState<string>("");
    const [tweetDraft, setTweetDraft] = React.useState<string>("");
    const [tweets, setTweets] = useTweets();
    
    const createTweet = () => {
        setTweets({text: tweetDraft, user: userName});
    }

    const updateTweetDraft = (event: any) => {
        setTweetDraft(event.target.value);
    }

    const updateUserNameDraft = (event: any) => {
        setUserNameDraft(event.target.value);
    }

    const updateUserName = () => {
        setUserName(userNameDraft);
    }

    if (userName === "") {
        return (
            <>
            <h2>Please enter a Username</h2>
            <form onSubmit={updateUserName}>
                <input type="text" value={userNameDraft} onChange={updateUserNameDraft}/>
                <input type="submit" value="Submit"/>
            </form>
            </>
        )
    }
    else {
        return (
            <>
            <h2>Fluid Twitter</h2>
            <form onSubmit={createTweet}>
                <label>What's on your mind?</label>
                <br/>
                <input type="text" placeholder="Enter anything!" autoComplete='off' onChange={updateTweetDraft} id="tweet"/>
                <input type="submit" value="Submit"/>
            </form>
            <br />
            {
                tweets ?
                tweets.map((tweet: ITweet) => {
                    return <Tweet text={tweet.text} time={tweet.time} user={tweet.user}/>
                })
                :
                null
            }
        </>
        )
    }
}