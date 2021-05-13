import React from "react";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day(){
        let date= new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
            
        ];
        return days[day];
    }
    function icon() {
        let iconCode = props.data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        return iconUrl;
    }
    return (
        <div>
           <div className= "forecastDay">
                {day()}            
            </div>
            <img 
            src = {icon()}
            alt ="/"
            width = "50"
            />
            <div className= "forecastTemperature">
            <span className= "forecastTemp-max"> {maxTemperature()} </span>
            <span className= "forecastTemp-min"> {minTemperature()} </span>
            </div>
        </div>
    );
    }  
    