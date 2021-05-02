import React, {useState} from "react";

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
         ↑ {Math.round(max)}°
        </span>
      </li>
      <li>
      <span className="low">
        ↓ {Math.round(min)}°
      </span>
      </li>
      </ul>
      </span>
    </div>
  
  <div className="col-4">
    <h1 className="display-1">
      <span className="mainTemp">
        {Math.round(celsius)}
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
         ↑ {Math.round(max*1.8) + 32}°
        </span>
      </li>
      <li>
      <span className="low">
        ↓ {Math.round(min*1.8) + 32}°
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
