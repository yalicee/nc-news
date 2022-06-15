import { useState, useEffect } from 'react'
import { fetchArticles } from '../utils/API-Requests';

const UseArticles = (topic_slug) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        fetchArticles(topic_slug).then((articlesData) => {
            if (articlesData.message) {
                setNotFound(true)
            } else {
                setArticles(articlesData)
                setIsLoading(false)
            }
        })
    }, [setArticles, topic_slug])

    return {articles, setArticles, isLoading, setIsLoading, notFound, setNotFound}
}


export default UseArticles