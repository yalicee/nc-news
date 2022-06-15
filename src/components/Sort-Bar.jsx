import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchSortedArticles } from "../utils/API-Requests";
import ArticlesList from "./Articles-List";


export default function SortBar({articles, setArticles, setIsLoading, isLoading}) {
    let [, setSearchParams] = useSearchParams();
    const [asc, setAsc] = useState(false)
    const [isSorted, setIsSorted] = useState(false)

    const handleClick = (event) => {
        const params = { sort_by: event.target.value }
        setSearchParams(params, { replace: true })
        setIsSorted(true)
    }
    
    const search = useLocation().search;
    const sort = (new URLSearchParams(search).get('sort_by'));

    const handleAsc = () => {
        setAsc(((currAsc) => !currAsc))
    }

    useEffect(() => {
        if (sort !== null) {
            if (asc) {
                fetchSortedArticles(`?sort_by=${sort}&order=asc`).then((articlesData) => {
                    setArticles(articlesData)
                    setIsLoading(false)
                })
            } else {
                fetchSortedArticles(`?sort_by=${sort}`).then((articlesData) => {
                    setArticles(articlesData)
                    setIsLoading(false)
                })
            }
        }
        
    }, [setArticles, setIsLoading, sort,asc])

    if(isLoading) return <p>Loading ...</p>
    return (
      <>
        <button value="votes" onClick={handleClick}>Votes</button>
        <button value="comment_count" onClick={handleClick}>Comment count</button>
            <button value="created_at" onClick={handleClick}>Date</button>
            {
                isSorted ?  <button onClick={handleAsc}>{ asc ? "Descending" :  "Ascending " }</button> : null
            }
           
        <ArticlesList articles={articles}/>
        
      </>
  )
}
