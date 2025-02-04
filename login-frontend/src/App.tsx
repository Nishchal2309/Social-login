import "./App.css";
import FrontPage from "./FrontPage";
import EndingPage from "./EndingPage";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/endingpage" element={<EndingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
