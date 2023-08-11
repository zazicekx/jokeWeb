import { useState } from "react";
import "../CSS/jokebutton.css"


const WelcomePage = () => {
  const [joke, setJoke] = useState('');
  const [joke1, setJoke1] = useState('');
  const [joke2, setJoke2] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [timerId1, setTimerId1] = useState(null);
  const [timerId2, setTimerId2] = useState(null);
  const [isMemeModalVisible, setIsMemeModalVisible] = useState(false);

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

  const startTimer2 = (setVisibleFunction) => {
    return setTimeout(() => {
      setVisibleFunction(false);
    }, 10000);
  };


  const fetchJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Pun?type=single', {
        headers: {
          Accept: 'application/json',
          'X-Api-Key': 'Spa8XXDE1dqkDJDOTlGXUQ==2k1Oq9DejYYJrFYd'
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
      const response = await fetch('https://v2.jokeapi.dev/joke/Dark?type=single', {
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

  const fetchJoke2 = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setJoke2(data[0].url);
      setIsMemeModalVisible(true);
  
      clearTimeout(timerId2); // Clear the previous timer
      const newTimerId = startTimer2(() => setIsMemeModalVisible(false)); // Start a new timer
      setTimerId2(newTimerId);
    } catch (error) {
      console.error('Error fetching meme:', error);
    }
  };

 
  return (
    <div className="jokeButtonContainer">
      <button onClick={fetchJoke} className="jokeButton">Get Daddy Joke</button>
      {isVisible && <p>{joke}</p>}
      <button onClick={fetchJoke1} className="jokeButton">Get Dark joke</button>
      {isVisible1 && <p>{joke1}</p>}
      <button onClick={fetchJoke2} className="jokeButton">Get cat picture</button>
      {isMemeModalVisible && (
        <div className="memeModalOverlay" onClick={() => setIsMemeModalVisible(false)}>
          <div className="memeModalContent">
            <img src={joke2} alt="Meme" />
          </div>
        </div>
  )}
    </div>
  );
};

export default WelcomePage