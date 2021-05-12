import axios from "axios";
import React from "react";
import './WeatherForecast.css';

export default function WeatherForecast (props) {
    function handleResponse (response){
        console.log(response.data);
    }
    let apiKey= "752caa80f650691fadd3574c96f9f105";
    let lon=props.coordinates.lon;
    let lat=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse);
return (
    <div className="dailyForecast">
    <div className= "fiveDayForecast">
    <div className="row">
        <div className= "col">
            <div className= "forecastDay">
                Thu            
            </div>
            <img 
            src ="http://openweathermap.org/img/wn/10d@2x.png"
            alt ="Sunny"
            width = "50"
            />
            <div className= "forecastTemperature">
            <span className= "forecastTemp-max"> 19° </span>
            <span className= "forecastTemp-min"> 10° </span>
            </div>
        </div>
    </div>
    </div>
    </div>
);
}