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
         

<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">  

<ol className="carousel-indicators">
	<li data-target="#myCarousel" data-slide-to="0" className="active">
	</li>
	<li data-target="#myCarousel" data-slide-to="1">
	</li>
  <li data-target="#myCarousel" data-slide-to="2">
	</li>
</ol>
 
<div className="carousel-inner">
  <div className="carousel-item active">
    <p>Details</p>
  </div>
  <div className="carousel-item">
      <p>Hourly Forecast</p>
  </div>
  <div className="carousel-item">
      <p>Next five days</p>
  </div>
</div>
<a href="#myCarousel" className="carousel-control-prev" role="button" data-slide="prev">
	<span className="sr-only">Previous</span>
	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
</a>
<a href="#myCarousel" className="carousel-control-next" role="button" data-slide="next">
	<span className="sr-only">Next</span>
	<span className="carousel-control-next-icon" aria-hidden="true"></span>
</a>  
  </div>
  </div> 
  
  
  
  );
}
