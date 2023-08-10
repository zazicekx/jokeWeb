import { useState } from "react";
import "../CSS/jokebutton.css"


const WelcomePage = () => {
  const [joke, setJoke] = useState('');
  const [joke1, setJoke1] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [timerId1, setTimerId1] = useState(null);

  const startTimer = (setVisibleFunction) => {
    return setTimeout(() => {
      setVisibleFunction(false);
    }, 8000);
  };

  const startTimer1 = (setVisibleFunction) => {
    return setTimeout(() => {
      setVisibleFunction(false);
    }, 8000);
  };


  const fetchJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setJoke(data.joke);
      setIsVisible(true);

      clearTimeout(timerId); // Clear the previous timer
      const newTimerId = startTimer(setIsVisible); // Start a new timer
      setTimerId(newTimerId);

    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const fetchJoke1 = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Dark?type=single', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setJoke1(data.joke);
      setIsVisible1(true);


      clearTimeout(timerId1); // Clear the previous timer
      const newTimerId = startTimer1(setIsVisible1); // Start a new timer
      setTimerId1(newTimerId);

    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

 
  return (
    <div className="jokeButtonContainer">
      <button onClick={fetchJoke} className="jokeButton">Get Daddy Joke</button>
      {isVisible && <p>{joke}</p>}
      <button onClick={fetchJoke1} className="jokeButton">Get Joke</button>
      {isVisible1 && <p>{joke1}</p>}
    </div>
  );
};

export default WelcomePage