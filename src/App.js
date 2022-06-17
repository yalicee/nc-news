import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Articles from "./components/Articles";
import NavBar from "./components/Nav-Bar";
import SingleArticle from "./components/Single-Article";
import Users from "./components/Users";
import { UserContext } from "./contexts/User-Context";
import NotFound from "./components/Not-Found";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("Not logged in");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Articles className="articles-layout" />}
            />
            <Route path="/topics">
              <Route path=":topic_slug" element={<Articles />} />
            </Route>
            <Route path="/articles">
              <Route path=":article_id" element={<SingleArticle />} />
            </Route>
            <Route path="/user" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
