import React from "react";

export default function WeatherTemp(props) {
   
    return (
<div className= "WeatherTemperature">
    
  <div className="row">
     <div className="col-4">
      <span className="highLow">
      <ul>
      <li>
        <span className="high">
         ↑ {Math.round(props.data.highTemp)}°
        </span>
      </li>
      <li>
      <span className="low">
        ↓ {Math.round(props.data.lowTemp)}°
      </span>
      </li>
      </ul>
      </span>
    </div>
  
  <div className="col-4">
    <h1 className="display-1">
      <span className="mainTemp">
        {Math.round(props.celsius)}
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
        <a href="/" >F°</a>
    </span>
        </li>
        </ul>
    </span>
    </div>
  </div>
</div> 
    );

}
