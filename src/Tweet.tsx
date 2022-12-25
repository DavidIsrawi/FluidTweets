import { ITweet } from "./types";

export const Tweet = ({text, time, user}: ITweet) => {
    const formattedDate = new Date(time).toDateString();
    return (
        <div>
            <h4>{text}</h4>
            <p>Posted on {formattedDate} by {user}</p>
        </div>
    )
}