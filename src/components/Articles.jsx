import { useState, useEffect } from 'react'

import Home from './Home'
import { fetchArticles } from '../utils/API-Requests'

export default function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then((articlesData) => {
            setArticles(articlesData)
        })
    }, [])


    return (
        <Home articles={articles} setArticles={setArticles}/>
  )
}
