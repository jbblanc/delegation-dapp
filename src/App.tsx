import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Delegation from "./components/Delegation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100">
        <nav className="navbar bg-base-200">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              Home
            </Link>
            <Link to="/delegation" className="btn btn-ghost">
              Delegation
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/delegation" element={<Delegation />} />
          <Route
            path="/"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold">Welcome to the App</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
