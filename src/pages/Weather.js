import { useState } from "react";
import "../CSS/weather.css"

const Weather = () => {

   const [dataPrague, setDataPrague] = useState('');

   const fetchDataPrague = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.088&longitude=14.4208&hourly=temperature_2m&current_weather=true', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setDataPrague(data.current_weather);
 

    } catch (error) {
      console.error('Error fetching joke:', error);
    }
   };

   const [dataKosice, setDataKosice] = useState('');

   const fetchDataKosice = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.7139&longitude=21.2581&hourly=temperature_2m&current_weather=true', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setDataKosice(data.current_weather);
 

    } catch (error) {
      console.error('Error fetching joke:', error);
    }
   };

  return (
      <div className="weatherButtonContainer">
      <button onClick={fetchDataPrague} className="weatherButton">Prague actual Weather</button>
      {dataPrague && (
        <p className="weatherText">
          Temperature: {dataPrague.temperature}°C, Wind Speed: {dataPrague.windspeed} m/s
        </p>
      )}
      <button onClick={fetchDataKosice} className="weatherButton">Kosice actual Weather</button>
      {dataPrague && (
        <p className="weatherText">
          Temperature: {dataKosice.temperature}°C, Wind Speed: {dataKosice.windspeed} m/s
        </p>
      )}
    </div>


  );
}

export default Weather