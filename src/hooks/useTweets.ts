import { TinyliciousClient } from "@fluidframework/tinylicious-client";
import { IFluidContainer, SharedMap } from "fluid-framework";
import React from "react";
import { ITweet } from "../types";

const client = new TinyliciousClient();
const containerSchema = {
    initialObjects: { sharedTweets: SharedMap }
}

const tweetsKey = "tweets"

const getFluidData = async () => {
    let container: IFluidContainer;
    // eslint-disable-next-line
    const containerId = location.hash.substring(1);
    if (!containerId) {
        container = (await client.createContainer(containerSchema)).container;
        const id = await container.attach();
        // eslint-disable-next-line
        location.hash = id;
    }
    else {
        container = (await client.getContainer(containerId, containerSchema)).container;
    }
    return container.initialObjects.sharedTweets;
}

export const useTweets = (): [ITweet[], (tweetBody: Pick<ITweet, "text" | "user">) => void] => {
    const [sharedObject, setSharedObject] = React.useState<any>(undefined);
    const [tweets, setTweets] = React.useState<ITweet[]>([]);

    React.useEffect(() => {
        getFluidData().then((sharedTweets) => {
            setSharedObject(sharedTweets);
        });
    }, []);

    React.useEffect(() => {
        if(sharedObject) {
            // TODO 4: Set the value of the localTimestamp state object that will appear in the UI.
            const updateTweets = () => {
                setTweets(sharedObject.get(tweetsKey))
            };
            updateTweets();
            
            // TODO 5: Register handlers.
            sharedObject.on("valueChanged", updateTweets);
            
            // TODO 6: Delete handler registration when the React App component is dismounted.
            return () => { sharedObject.off("valueChanged", updateTweets) };
        }
        else {
            return;
        }
    }, [sharedObject]);

    const createTweet = (tweetBody: Pick<ITweet, "text" | "user">) => {
        const tweet: ITweet = {
            ...tweetBody,
            time: Date.now()
        }
        if (tweets) {
            sharedObject.set(tweetsKey, [tweet, ...tweets]);
        }
        else {
            sharedObject.set(tweetsKey, [tweet])
        }
    }

    return [tweets, createTweet];
}