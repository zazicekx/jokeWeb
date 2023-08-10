import 'bootstrap'
import ApiFetcher from '../functions/ApiFetcher';

const Bootstrap = () => {
    const jokeApiUrl = 'https://icanhazdadjoke.com/';
    
    const extractJoke = (responseData) => {
      const jokeMatch = responseData.match(/<p>(.*?)<\/p>/);
      return jokeMatch ? jokeMatch[1] : 'No joke found';
    };
  
    return (
      <div>
        <h1>Dad Joke of the Day</h1>
        <ApiFetcher url={jokeApiUrl} dataExtractor={extractJoke} />
      </div>
    );
  };

export default Bootstrap