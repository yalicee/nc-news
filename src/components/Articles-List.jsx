import {Link} from "react-router-dom"

export default function ArticlesList({ articles }) {
  
    
  return (
    <ul className="articles-list">{articles.map((article) => {
        
        const dateStr = new Date(article.created_at).toDateString();
      
        return <li key={article.article_id} className="article-list-item">
            <h2>{article.title}</h2>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
          <p id="article-body">{article.body.split(" ").slice(0, 40).join(" ")}...</p>
          <Link className="click-to-read" to={`/articles/${article.article_id}`}>Click here to read more</Link>
          <div className="article-info-box">
            <p>{dateStr}</p>
            <p>Votes: {article.votes}</p>
          <p>Comment count: {article.comment_count}</p>
            <p>Word count: {article.body.split(" ").length}</p>
            </div>
       </li>
    })}</ul>
  )
}
