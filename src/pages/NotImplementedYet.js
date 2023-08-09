import {useNavigate } from "react-router-dom";
import "../CSS/notImplementedYet.css"

function NotImplementedYet() {

  const navigate = useNavigate();

  function home() {
    navigate("/");
  }
  
  return (
    <div className="notimplemented">
    <p className="message">Sorry!</p>
    <p className="message">This page has not yet been implemented.</p>
    <p className="message">Click the button below to return to the homepage.</p>
    <button className="homeButton" onClick={home}>Back to Home Page</button>
  </div>
  );
}

export default NotImplementedYet;