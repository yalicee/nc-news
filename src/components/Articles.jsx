import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

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
      <Routes>
            <Route path ="/" element={<Home className="home" articles={articles} setArticles={setArticles}/>}></Route>
      </Routes>
  )
}
