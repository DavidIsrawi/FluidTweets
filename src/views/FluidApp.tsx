import React from 'react';
import { useTweets } from '../hooks/useTweets';
import { useUser } from '../hooks/useUser';
import { NewUserExperience } from './NewUserExperience';
import { TweetsDashboard } from './TweetsDashboard';

export const FluidApp = () => {
    const [tweets, addTweet] = useTweets();
    const [user, setUser] = useUser();
    
    const postTweet = (text: string) => {
        if (!user) {
            throw new Error('Username needs to sign up before tweeting');
        }
        addTweet({text, user: user.name});
    }

    return (
        <section id='main-pane'>
        {
            user ? <TweetsDashboard tweets={tweets} postTweet={postTweet}/> : <NewUserExperience setUser={setUser}/>
        }
        </section>
    );
}