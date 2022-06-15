import {Link} from "react-router-dom"

export default function ArticlesList({ articles}) {
    
  return (
      <ul>{articles.map((article) => {
        const dateStr = new Date(article.created_at).toDateString();
      
        return <li key={article.article_id} className="articles__list">
            <h2>{article.title}</h2>
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p id ="article-body">{article.body}</p>
            <Link to={`/articles/${article.article_id}`}>Read more...</Link>
            <p>Date: {dateStr}</p>
            <p>Votes: {article.votes}</p>
            <p>Comment count: {article.comment_count}</p>
       </li>
    })}</ul>
  )
}
