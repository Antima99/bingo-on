import "./App.css";
import Game from "./component/Bingo";
import About from "./component/App-components/About";
import Tournaments from "./component/App-components/Tournaments";
import Home from "./component/App-components/Home";
import History from "./component/App-components/History";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Bingo World</Link>
          </div>
          <ul>
            <li>
              <Link to="/game">Play Bingo</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Learn Bingo Game Rules - About Bingo</Link>
            </li>
            <li>
              <Link to="/tournaments">Tournaments</Link>
            </li>
            <li>
              <Link to="/history">History of Bingo</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
