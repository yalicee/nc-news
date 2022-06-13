import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Articles />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
