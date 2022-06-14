import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from '../utils/API-Requests';
import Comments from './Comments';
import Votes from './Votes';

export default function SingleArticle({isLoading, setIsLoading}) {
    const [article, setArticle] = useState({})
  const [date, setDate] = useState("...loading");
  const [commentCount, setCommentCount] = useState(0)



    const { article_id } = useParams()
    useEffect(() => {
        fetchSingleArticle(article_id).then((articleData) => {
            setArticle(articleData)
            const dateStr = new Date(article.created_at).toDateString();
            if (dateStr !== "Invalid Date") {
                setDate(dateStr)
            }
            setIsLoading(false)

        })
    }, [article_id, setIsLoading, article.created_at, setDate, article.comment_count])
    
    if(isLoading) return <p>Loading ...</p>
    return (
      <div className="single-article">
      <p>{article.title}</p>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.body}</p>
      <p>Date: {date}</p>
        <Votes votes={article.votes} article_id={article.article_id} />
      <p>Comment count: {parseInt(article.comment_count) + commentCount}</p>
        <Comments article={article} isLoading={isLoading} setIsLoading={setIsLoading} setCommentCount={setCommentCount} commentCount={commentCount}/>
      </div>
  )
}
