import "./App.css";

import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Articles from "./components/Articles";
import Topic from "./components/Topic";
import Header from "./components/Header";
import NavBar from "./components/Nav-Bar";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Articles articles={articles} setArticles={setArticles} />}
          ></Route>
          <Route
            path="/articles/:topic_slug"
            element={<Topic articles={articles} setArticles={setArticles} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
