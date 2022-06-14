import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from '../utils/API-Requests';
import Votes from './Votes';

export default function SingleArticle({isLoading, setIsLoading}) {
    const [article, setArticle] = useState({})
  const [date, setDate] = useState("loading...");


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
    }, [article_id, setIsLoading, article.created_at, setDate])

    if(isLoading) return <p>Loading ...</p>
    return (
      <div className="single-article">
      <p>{article.title}</p>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.body}</p>
      <p>Date: {date}</p>
      <Votes votes={article.votes} article_id={article.article_id} />
      <p>Comment count: {article.comment_count}</p>
      </div>
  )
}
