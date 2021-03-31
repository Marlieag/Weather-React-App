import React from "react";
import './App.css';
import Search from "./Search";


export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <h1 className="currentCity">
        DENVER
      </h1>
      <h4>
        Mon | Mar 24 | 8:20 PM
      </h4>
  
<figure className="text-center">
  <div className="row">
     <div className="col-4">
      <span className="highLow">
      <ul>
      <li>
      <span className="High">
         ↑39
      </span>
      </li>
      <li>
      <span className="Low">
        ↓19
      </span>
      </li>
      </ul>
      </span>
    </div>
  


  <div className="col-4">
    <h1 className="display-1">
      <span className="mainTemp">
        30
      </span>
    </h1>
  </div>
  <div className="col-4">
    <span className="convert">
      <ul>
      <li>
      <span className="Celsius">
        <a href="/" className="active">
         C
        </a>
      </span>
      </li>
      <li>
      <span className="Fahren">
        <a href="/">F</a>
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
           src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="weather icon"
            width="50"          
      />
      </span>
      <span className="description">
      <h2> 
        Sunny 
      </h2>
      </span>
    </div>
  </div>
</figure>         
         
  <h4 className="text-uppercase">
    <span className="label">
      Details
    </span>
  </h4>

  <div className="details">
    

  <h4 className="text-uppercase">
    <span className="label">
      Next 5 days
    </span>
  </h4>
<div className="week">
  <h5>
    <div className="row justify-content-md-center">
      <div className="col-sm-2.5">
        <div className="card text-muted bg-transparent border-0">
          <div className="card-body">
  <h5 className="card-title">
    <span className="weekday">
      Tue
    </span>
    <br/>
      2/29
  </h5>
    <i className="fas fa-cloud-sun"></i>
    <p className="card-text">
      37°
    <br/>
      18°
    </p>
      </div>
    </div>
  </div>

  <div className="col-sm-2.5">
    <div className="card text-muted bg-transparent border-0">
      <div className="card-body">
  <h5 className="card-title">
      Wed
    <br />
      12/30
  </h5>
    <i className="fas fa-sun"></i>
    <p className="card-text">
      42°
    <br />
      24°
    </p>
      </div>
    </div>
  </div>
  
  <div className="col-sm-2.5">
    <div className="card text-muted bg-transparent border-0">
      <div className="card-body">
  <h5 className="card-title">
      Thu
    <br />
      12/31
  </h5>
    <i className="fas fa-cloud-sun"></i>
    <p className="card-text">
      47°
    <br />
      27°
    </p>
      </div>
    </div>
  </div>

  <div className="col-sm-2.5">
    <div className="card text-muted bg-transparent border-0">
      <div className="card-body">
  <h5 className="card-title">
      Fri
    <br />
      01/01
  </h5>
    <i className="fas fa-cloud-sun"></i>
    <p className="card-text">
      41°
    <br />
      24°
    </p>
      </div>
    </div>
  </div>

<div className="col-sm-2.5">
  <div className="card text-muted bg-transparent border-0">
    <div className="card-body">
  <h5 className="card-title">
      Sat
    <br />
      01/02
  </h5>
    <i className="fas fa-cloud-sun"></i>
    <p className="card-text">
      49°
    <br />
      27°
    </p>
    </div>
  </div>
</div>
</div>
    </h5>
    </div>
    </div>
  </div>
  );
}
