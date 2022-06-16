import { useState, useEffect } from 'react'
import { fetchSingleArticle } from '../utils/API-Requests';
import UseArticles from './UseArticles';

const UseSingleArticle = (article_id) => {
    const [article, setArticle] = useState({})
    const [date, setDate] = useState("...loading");
    const {setIsLoading, notFound, setNotFound} = UseArticles()

    useEffect(() => {
        fetchSingleArticle(article_id).then((articleData) => {
            if (articleData.message) {
                setNotFound(true)
            } else {
                setArticle(articleData)
                const dateStr = new Date(article.created_at).toDateString();
                if (dateStr !== "Invalid Date") {
                    setDate(dateStr)
                }
                setIsLoading(false)
            }
          })
      }, [article_id, setIsLoading, article.created_at, setDate, article.comment_count, setNotFound])

    return {article, setArticle, notFound, date}
}


export default UseSingleArticle