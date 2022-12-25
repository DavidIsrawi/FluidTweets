import { ITweet } from "../types";

export const Tweet = ({text, time, user}: ITweet) => {
    const formattedDate = new Date(time).toDateString();
    return (
        <div className="tweet">
            <h4>{user}</h4>
            <p>{text}</p>
            <p className="tweet-time">Posted on {formattedDate}</p>
        </div>
    )
}