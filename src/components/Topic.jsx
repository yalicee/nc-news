// import { useEffect} from 'react'
import { useParams } from "react-router-dom";
import UseArticles from '../hooks/UseArticles';
// import { fetchArticles } from '../utils/API-Requests';
import SortBar from './Sort-Bar';

export default function Topic() {
    
  const { topic_slug } = useParams()
  
  const { articles, setArticles, isLoading } = UseArticles(topic_slug)
    // useEffect(() => {
    //     fetchArticles(topic_slug).then((articlesData) => {
    //         setArticles(articlesData)
    //     })
    // }, [setArticles, topic_slug])
  
  if(isLoading) return <p>Loading ...</p>
  return (
    <SortBar articles={articles} setArticles={setArticles} />
  )
}
