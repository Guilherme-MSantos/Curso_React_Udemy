import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";

// Hooks
import { HookUseContext } from "./components/HookUseContext";
function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
