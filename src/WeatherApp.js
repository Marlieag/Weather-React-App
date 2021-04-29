import React, {useState} from "react";
import './App.css';
import axios from "axios";
import Search from "./Search";
import FormattedDate from "./FormattedDate"




export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse (response) {
    console.log(response.data);
  setWeatherData ({
    ready: true,
    temperature: response.data.main.temp,
    highTemp: response.data.main.temp_max,
    lowTemp: response.data.main.temp_min,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    city: response.data.name
  }); 
}
  if (weatherData.ready) {
  return (
    <div className="container">
    <div className="Weather">
      <Search />
      <h1 className="currentCity">
        {weatherData.city}
      </h1>
      <h4>
        <FormattedDate date= {weatherData.date} />
      </h4>
  
<figure className="text-center">
  <div className="row">
     <div className="col-4">
      <span className="highLow">
      <ul>
      <li>
      <span className="High">
         ↑ {Math.round(weatherData.highTemp)}°
      </span>
      </li>
      <li>
      <span className="Low">
        ↓ {Math.round(weatherData.lowTemp)}°
      </span>
      </li>
      </ul>
      </span>
    </div>
  
  <div className="col-4">
    <h1 className="display-1">
      <span className="mainTemp">
        {Math.round(weatherData.temperature)}
      </span>
    </h1>
  </div>
  <div className="col-4">
    <span className="convert">
      <ul>
      <li>
      <span className="Celsius">
        <a href="/" className="active">
         C°
        </a>
      </span>
      </li>
      <li>
      <span className="Fahren">
        <a href="/">F°</a>
      </span>
      </li>
      </ul>
      </span>
    </div>
  </div>

  <div className="row">
    <div className="col-6">
      <span className="weatherIcon">
      <img
           src= {weatherData.icon}
            alt={weatherData.description}
            width="50"          
      />
      </span>
      <span className="text-capitalize">
        <span className="description">
      <h2>        
        {weatherData.description}         
      </h2>
        </span>
      </span>
    </div>
  </div>
</figure>         

 </div>
</div> 
   
);
} else {
  const apiKey = "752caa80f650691fadd3574c96f9f105";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading..."
}
}
