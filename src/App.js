import "./App.css";

import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Articles from "./components/Articles";
import Topic from "./components/Topic";
import Header from "./components/Header";
import NavBar from "./components/Nav-Bar";
import SingleArticle from "./components/Single-Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Articles
                articles={articles}
                setArticles={setArticles}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          ></Route>
          <Route
            path="/topics/:topic_slug"
            element={<Topic articles={articles} setArticles={setArticles} />}
          ></Route>
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
