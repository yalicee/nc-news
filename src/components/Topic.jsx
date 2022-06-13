import { useEffect} from 'react'
import { useParams } from "react-router-dom";
import { fetchArticles } from '../utils/API-Requests';
import ArticlesList from './Articles-List';

export default function Topic({articles, setArticles}) {
    
    
    const { topic_slug } = useParams()
    useEffect(() => {
        fetchArticles(topic_slug).then((articlesData) => {
            setArticles(articlesData)
        })
    }, [setArticles, topic_slug])

  return (
    <ArticlesList articles={articles}></ArticlesList>
  )
}
