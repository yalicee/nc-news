import { useEffect} from 'react'
import { useParams } from "react-router-dom";
import { fetchArticles } from '../utils/API-Requests';
import SortBar from './Sort-Bar';

export default function Topic({articles, setArticles,isLoading, setIsLoading}) {
    
    
    const { topic_slug } = useParams()
    useEffect(() => {
        fetchArticles(topic_slug).then((articlesData) => {
            setArticles(articlesData)
        })
    }, [setArticles, topic_slug])
  
  if(isLoading) return <p>Loading ...</p>
  return (
    <SortBar articles={articles} setArticles={setArticles} isLoading={isLoading} setIsLoading={setIsLoading}/>
  )
}
