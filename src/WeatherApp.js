import React, {useState} from "react";
import './App.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import LocationButton from "./LocationButton";




export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse (response) {
    console.log(response.data);
  setWeatherData ({
    ready: true,
    temperature: response.data.main.temp,
    highTemp: response.data.main.temp_max,
    lowTemp: response.data.main.temp_min,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    city: response.data.name
  }); 
}

function search(){
  const apiKey = "752caa80f650691fadd3574c96f9f105";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
 function handleSubmit (event) {
    event.preventDefault();
    search();
  }
  function changeCity (event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
  return (
    <div className="container">
    <div className="Weather">
      <form className="search-bar" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">         
          <input
            type="text"
            placeholder="Enter a city..."
            autoFocus="on"
            className="form-control w-100"
            onChange= {changeCity}
            
          />
        </div>
        <div className="col-3">
          <div className="primaryButton">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary form-control w-75"
            />
          </div>
        </div>

        <div className="col-1">
         <LocationButton/>
        </div>
      </div>
    </form>
      <WeatherInfo data = {weatherData}/>        

 </div>
</div> 
   
);
} else {
  search();
  return "loading...";
}
}
