import {  useState, useEffect } from 'react'
import { fetchArticles } from '../utils/API-Requests'
import ArticlesList from './Articles-List'

export default function Articles({articles, setArticles}) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles().then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [setArticles])

    if(isLoading) return <p>Loading ...</p>
    return (<ArticlesList articles={articles}/>)
}
