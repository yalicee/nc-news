import { useState, useContext } from 'react'
import { UserContext } from "../contexts/User-Context";

import { postComment } from '../utils/API-Requests'

export default function AddComment({ users, article, setCommentCount}) {
    const [failedComment, setFailedComment] = useState(false)
    const [body, setBody] = useState("")

    const { loggedInUser } = useContext(UserContext);



    const handleCommentSubmit = (event) => {
        event.preventDefault()

        if (loggedInUser !== "Not logged in") {
            postComment(article.article_id, {
                username: loggedInUser,
                body: body
            }).then(() => {
                setCommentCount((currCount) => currCount + 1);
            })
        } else {
            setFailedComment(true)
        }

        event.target.reset()
    }

    let message = "You need to log in to comment"    
    if (failedComment) {
        message = "You have not logged in"
    };

    return (
        <form className="add-comment" onSubmit={handleCommentSubmit}>

    <label>{loggedInUser === "Not logged in" ? message : "Add a comment to the article"}
        
    <textarea required placeholder="write your comment here" rows="5" cols="25" onChange={(event) => {
                setBody(event.target.value)
            }}>
                
    </textarea>
    </label>
    <button>post comment</button>
    </form>
  )
}
