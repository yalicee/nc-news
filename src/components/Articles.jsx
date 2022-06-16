import { useParams } from "react-router-dom";
import UseArticles from '../hooks/UseArticles';
import SortBar from './Sort-Bar';
import NotFound from "./Not-Found";

export default function Articles() {
    
  const { topic_slug } = useParams()
  
  const { articles, setArticles, isLoading, notFound } = UseArticles(topic_slug)
 
  if (notFound) return <NotFound topic_slug={topic_slug}/>
  if(isLoading) return <p>Loading ...</p>
  return (
    <div  className="articles-layout">
      <SortBar articles={articles} setArticles={setArticles} />
    </div>
  )
}
