import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
    <div className= "weatherInfo">
       <h1 className="currentCity">
        {props.data.city}
      </h1>
      <h4>
        <FormattedDate date= {props.data.date} />
      </h4>
  
<figure className="text-center">
  <div className="row">
     <div className="col-4">
      <span className="highLow">
      <ul>
      <li>
      <span className="High">
         ↑ {Math.round(props.data.highTemp)}°
      </span>
      </li>
      <li>
      <span className="Low">
        ↓ {Math.round(props.data.lowTemp)}°
      </span>
      </li>
      </ul>
      </span>
    </div>
  
  <div className="col-4">
    <h1 className="display-1">
      <span className="mainTemp">
        {Math.round(props.data.temperature)}
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
           src= {props.data.icon}
            alt={props.data.description}
            width="60"          
      />
      </span>
      <span className="text-capitalize">
        <span className="description">
      <h2>        
        {props.data.description}         
      </h2>
        </span>
      </span>
    </div>
  </div>
</figure>
</div>
    )
}