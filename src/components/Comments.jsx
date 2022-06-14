import { useState, useEffect } from 'react'
import { fetchComments } from '../utils/API-Requests'
import CommentsList from './Comments-List';
import Users from './Users';


export default function Comments({article, isLoading, setIsLoading, setCommentCount, commentCount}) {
    const [comments, setComments] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)
    
    useEffect(() => {
        if (article.article_id) {
            fetchComments(article.article_id).then((commentsData) => {
                setComments(commentsData)
                setIsLoading(false)
            })
        }
    }, [article.article_id, setIsLoading, isUpdated])

    if(isLoading) return <p>Loading ...</p>
    return (
        <>
            <Users comments={comments} article={article} setComments={setComments} setCommentCount={setCommentCount} setIsUpdated={setIsUpdated} isUpdated={isUpdated}/>
        <CommentsList setIsLoading={setIsLoading} >
            <ul>{comments.map((comment) => {
            return <li key={comment.comment_id} className="comment">
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
            <p>{comment.votes}</p>
            </li>
        })}</ul>
            </CommentsList>
            </>
    )
}
