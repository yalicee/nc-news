import {useState} from 'react'
import { postComment } from '../utils/API-Requests'

export default function AddComment({ users, article, setCommentCount, setIsUpdated, isUpdated }) {
 
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    const handleCommentSubmit = (event) => {

        event.preventDefault()
        if (author !== "") {
            postComment(article.article_id, {
                username: author,
                body: body
            }).then(() => {
                setIsUpdated(!isUpdated)
                setCommentCount((currCount) => currCount + 1);
            })
        }

    }

    return (
        <form className="add-comment" onSubmit={handleCommentSubmit}>

        
    <label>Add a comment to the article
                <select required onChange={(event) => {
                setAuthor(event.target.value)
            }}>
                <option selected disabled>
            Choose a user
          </option>
        {users.map((user) => {
            return <option value={user.username} key={user.username}>{user.username}</option>
        })}
    </select>
    
    <textarea required placeholder="write your comment here" rows="5" cols="25" onChange={(event) => {
                setBody(event.target.value)
            }}>
                
    </textarea>
    </label>
    <button>post comment</button>
    </form>
  )
}
