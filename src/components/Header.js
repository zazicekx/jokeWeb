import { Link } from "react-router-dom"; 
import "../CSS/header.css"

function Header() {
    return (
        <div className="headerContainer">
            <div className="linksContainer">
                <Link className="headerLink" to="/">
                    Home
                </Link>
                <Link className="headerLink" to="/login">
                    Login
                </Link>
                <Link className="headerLink" to="/register">
                    Register
                </Link>
                <Link className="headerLink" to="/MoreJokes">
                    MoreJokes
                </Link>
                <Link className="headerLink" to="/Weather">
                    Weather
                </Link>
                <Link className="headerLink" to="/about">
                    About
                </Link>
            </div>
        </div>
    );
}

export default Header;

