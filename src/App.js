import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Footer from "./components/Footer"
import NotImplementedYet from "./pages/NotImplementedYet";
import Bootstrap from "./pages/moreJokes";
import "./CSS/app.css"

function App() {
  return (
    <div className="wholePage">
      <Router>
        <Header />
          <Routes>
            <Route path={"/"} element={<WelcomePage />} />
            <Route path={"/login"} element={<NotImplementedYet /> } />
            <Route path={"/moreJokes"} element={<Bootstrap /> } />
            <Route path={"/terms&cond"} element={<NotImplementedYet /> } />
            <Route path={"/about"} element={<NotImplementedYet /> } />
            <Route path={"/register"} element={<NotImplementedYet /> } />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;