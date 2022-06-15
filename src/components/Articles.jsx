import { useParams } from "react-router-dom";
import UseArticles from '../hooks/UseArticles';
import SortBar from './Sort-Bar';

export default function Articles() {
    
  const { topic_slug } = useParams()
  
  const { articles, setArticles, isLoading } = UseArticles(topic_slug)
 
  
  if(isLoading) return <p>Loading ...</p>
  return (
    <SortBar articles={articles} setArticles={setArticles} />
  )
}
