import { useState } from "react";
import "../CSS/weather.css"

const Weather = () => {

   const [data, setData] = useState('');

   const fetchData = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.088&longitude=14.4208&hourly=temperature_2m&current_weather=true', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setData(data.current_weather);
 

    } catch (error) {
      console.error('Error fetching joke:', error);
    }
   };


  return (
      <div className="weatherButtonContainer">
      <button onClick={fetchData} className="weatherButton">Prague actual Weather</button>
      {data && (
        <p className="weatherText">
          Temperature: {data.temperature}°C, Wind Speed: {data.windspeed} m/s
        </p>
      )}
    </div>
  );
}

export default Weather