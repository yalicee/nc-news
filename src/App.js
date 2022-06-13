import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Articles />
      </div>
    </BrowserRouter>
  );
}

export default App;
