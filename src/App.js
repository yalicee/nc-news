import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topic from "./components/Topic";
import Header from "./components/Header";
import NavBar from "./components/Nav-Bar";
import SingleArticle from "./components/Single-Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Topic />}></Route>
          <Route path="/topics/:topic_slug" element={<Topic />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
