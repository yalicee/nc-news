import {Link} from "react-router-dom"

export default function ArticlesList({ articles}) {
    
  return (
      <ul>{articles.map((article) => {
        const dateStr = new Date(article.created_at).toDateString();
      
        return <li key={article.article_id} className="articles__list">
            <p>{article.title}</p>
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p>{article.body}</p>
            <p>Date: {dateStr}</p>
            <p>Votes: {article.votes}</p>
            <p>Comment count: {article.comment_count}</p>
            <Link to={`/articles/${article.article_id}`}>Read more...</Link>
       </li>
    })}</ul>
  )
}
