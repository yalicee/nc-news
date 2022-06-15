import { useState, useEffect } from 'react'
import { fetchArticles } from '../utils/API-Requests';

const UseArticles = (topic_slug) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticles(topic_slug).then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [setArticles, topic_slug])

    return {articles, setArticles, isLoading, setIsLoading}
}


export default UseArticles