import {useState} from 'react'
import { useParams } from "react-router-dom";
import UseArticles from '../hooks/UseArticles';
import Comments from './Comments';
import Votes from './Votes';
import NotFound from './Not-Found';
import UseSingleArticle from '../hooks/UseSingleArticle';

export default function SingleArticle() {
  const [commentCount, setCommentCount] = useState(0)
  const { article_id } = useParams()

  const { isLoading, setIsLoading } = UseArticles()
  const {article, date, notFound} = UseSingleArticle(article_id)
  
    if (notFound) return <NotFound article_id={article_id}/>
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
