import {  useEffect } from 'react'
import { fetchArticles } from '../utils/API-Requests'
import ArticlesList from './Articles-List'

export default function Articles({articles, setArticles, isLoading, setIsLoading}) {

    useEffect(() => {
        fetchArticles().then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [setArticles, setIsLoading])

    if(isLoading) return <p>Loading ...</p>
    return (<ArticlesList articles={articles}W/>)
}
