import React, {useState} from "react";
import "./WeatherTemp.css";

export default function WeatherTemp({
    celsius,
    max,
    min
}) {
const [unit, setUnit] = useState ("celsius");
   function changeFahrenheit (event){
       event.preventDefault();
       setUnit("fahrenheit");
   }

   function changeCelsius (event){
       event.preventDefault();
       setUnit("celsius");
   }
if (unit === "celsius") {
    return (
<div className= "WeatherTemperature">
    
  <div className="row">
     <div className="col-4">
      <span className="highLow">
      <ul>
      <li>
        <span className="high">
          <strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
          </svg>
          {Math.round(max)}°
         </strong>
        </span>
      </li>
      <li>
      <span className="low">
        <strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
           {Math.round(min)}°
        </strong>
      </span>
      </li>
      </ul>
      </span>
    </div>
  
  <div className="col-4">
    <h1 className="display-1">
      <span className="mainTemp">
        <strong>
        {Math.round(celsius)}
        </strong>
      </span>
    </h1>
  </div>
  <div className="col-4">
    <span className="convert">
        <ul>
        <li>
      <span className="Celsius">       
        C°       
      </span>
        </li>
        <li>
    <span className="Fahren">
        <a href="/" onClick={changeFahrenheit} >F°</a>
    </span>
        </li>
        </ul>
    </span>
    </div>
  </div>
</div> 
    );
} else {
    let fahrenheit= (celsius*9/5) + 32;
    return (
  <div className= "WeatherTemperature">
    
  <div className="row">
     <div className="col-4">
      <span className="highLow">
      <ul>
      <li>
        <span className="high">
          <strong>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
          </svg>
          {Math.round(max*1.8) + 32}°
         </strong>
        </span>
      </li>
      <li>
      <span className="low">
        <strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
           {Math.round(min*1.8) + 32}°
        </strong>
      </span>
      </li>
      </ul>
      </span>
    </div>
  
  <div className="col-4">
    <h1 className="display-1">
      <span className="mainTemp">
        {Math.round(fahrenheit)}
      </span>
    </h1>
  </div>
  <div className="col-4">
    <span className="convert">
        <ul>
        <li>
      <span className="Celsius">       
       <a href="/" onClick={changeCelsius} >
        C°
       </a>        
      </span>
        </li>
        <li>
    <span className="Fahren">
        F°
    </span>
        </li>
        </ul>
    </span>
    </div>
  </div>
</div> 
    );      
    
}
}
