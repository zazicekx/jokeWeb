import 'bootstrap'
import { useState } from "react";

const MoreJokes = () => {
  const [joke, setJoke] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const startTimer = (setVisibleFunction) => {
    return setTimeout(() => {
      setVisibleFunction(false);
    }, 8000);
  };

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/chucknorris?', {
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

  return (
    <div className="jokeButtonContainer">
      <button onClick={fetchJoke} className="jokeButton">Get Chuck Norris Joke</button>
      {isVisible && <p>{joke}</p>}
    </div>
  );
}

export default MoreJokes