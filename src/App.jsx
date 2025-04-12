import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
