import React from 'react'

export default function ArticlesList({articles}) {
  return (
    <ul>{articles.map((article) => {
        return <li key={article.article_id} className="articles__list">
            <p>{article.title}</p>
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p>{article.body}</p>
            <p>{article.created_at}</p>
            <p>{article.votes}</p>
            <p>{article.comment_count}</p>
       </li>
    })}</ul>
  )
}
