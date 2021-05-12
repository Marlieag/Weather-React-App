import React from "react";
import './WeatherForecast.css';

export default function WeatherForecast () {
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