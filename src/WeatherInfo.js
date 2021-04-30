import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";


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
    <WeatherTemp celsius = {props.data.temperature}/>
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
    );
}
