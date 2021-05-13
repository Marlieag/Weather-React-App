import React, {useState} from "react";
import './App.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Button from "react-bootstrap/Button";
import WeatherForecast from "./WeatherForecast";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse (response) {
    console.log(response.data);
  setWeatherData ({
    ready: true,
    coordinates: response.data.coord,
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
  function showLocation(position){
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let key="752caa80f650691fadd3574c96f9f105";
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
}
  function getLocation(event){
    event.preventDefault ();
  navigator.geolocation.getCurrentPosition(showLocation); 
}
  if (weatherData.ready) {
  return (
    <div className="WeatherApp">
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
  <Button variant="light" type ="button" size="md" onClick= {getLocation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
  </Button>
        </div>
      </div>
    </form>
      <WeatherInfo data = {weatherData}/>        

</div>
<div className = "container">
  <WeatherDetails/>
</div>
<div className = "container">
      <WeatherForecast coordinates= {weatherData.coordinates}/>
</div>
</div> 
</div> 
);
} else {
  search();
  return "loading...";
}
}
