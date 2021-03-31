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
         

  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
       <div className="carousel-item active">
      <h4 className="text-uppercase">
    <span className="label">
      Details
    </span>
  </h4>

  <div className="details">
    Hello
  </div>
    </div>

    <div className="carousel-item">
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

    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div> 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true">
  </span>
    <span className="visually-hidden">
      Previous
    </span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true">     
    </span>
    <span className="visually-hidden">
      Next
    </span>
  </button>
  </div>
  </div>
  </div>
  );
}
