import { useState, useEffect, useContext } from 'react'
import { deleteComment, fetchComments } from '../utils/API-Requests'
import { UserContext } from "../contexts/User-Context";

import CommentsList from './Comments-List';
import AddComment from './Add-Comment';
import UseUsers from '../hooks/UseUsers';


export default function Comments({article, isLoading, setIsLoading, setCommentCount, commentCount}) {
    const [comments, setComments] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    const { loggedInUser } = useContext(UserContext);

    const users = UseUsers()
    
    useEffect(() => {
        if (article.article_id) {
            fetchComments(article.article_id).then((commentsData) => {
                setComments(commentsData)
                setIsLoading(false)
            })
        }
    }, [article.article_id, setIsLoading, commentCount])

    const handleDeleteComment = (comment) => {
        if (loggedInUser !== "Not logged in") {
            if (comment.author === loggedInUser) {
                deleteComment(comment.comment_id).then(() => {
                    setCommentCount((currCount) => currCount - 1)
                    setIsDeleted(false)
                })
            }
        }
    }
    

    if(isLoading) return <p>Loading ...</p>
    return (
        <>
             <AddComment users={users} comments={comments} setComments={setComments} article={article} setCommentCount={setCommentCount}/>
        <CommentsList setIsLoading={setIsLoading} >
            <ul>{comments.map((comment) => {
            return <li key={comment.comment_id} className="comment">
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
                <p>{comment.votes}</p>
                
                {loggedInUser===comment.author ?  <button onClick={() => {
                        handleDeleteComment(comment)
                        if (loggedInUser === comment.author) {
                            setIsDeleted(!isDeleted) 
                    }
                }}>Delete comment</button>  : null }
               

              
            </li>
        })}</ul>
            </CommentsList>
            </>
    )
}
