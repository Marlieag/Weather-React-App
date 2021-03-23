import React from "react";
import './App.css';
import Search from "./Search";


export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <h4>
        <figure className="text-center">
          <span className="date">
            <div className="row">
              <div className="col-5">Today, Dec 28, 2020</div>
              <div className="col-7">10:00 A.M.</div>
            </div>
          </span>
        </figure>
      </h4>

      <h1>Denver</h1>

      <figure className="text-center">
        <div className="row">
          <div className="col">
            <div className="dayTemp">
              <h3>
                High
                <br />
              </h3>
            </div>
          </div>
          <div className="col-7">
            <h1 className="display-1">
              <span className="mainTemp">30</span>

              <span className="convert">
                <span>
                  <a href="/" className="active">
                    °C
                  </a>
                </span>

                <span>
                  <a href="/">|°F</a>
                </span>
              </span>
            </h1>
            <span className="weather-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
                width="50"
              />
            </span>
            <h2 className="text-capitalize"> Sunny </h2>
          </div>

          <div className="col">
            <div className="dayTemp2">
              <h3>
                Low
                <br />
              </h3>
            </div>
          </div>
        </div>
      </figure>

      <h4 className="text-uppercase">
        <span className="label">Details</span>
      </h4>

      <div className="details">
        <div className="row justify-content-md-center ">
          <div className="col-sm-3">
            <div className="card h-70 text-start-white bg-transparent border border-transparent">
              <div className="card-body">
                <span className="thermometer">
                  <i className="fas fa-thermometer-three-quarters"></i>
                </span>

                <h6 className="card-title text-center">Feels:</h6>
                <p className="card-text-center"></p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card h-70 text-white bg-transparent border border-transparent ">
              <div className="card-body">
                <span className="humidity-icon">
                  <i className="fas fa-tint"></i>
                </span>
                <h6 className="card-title text-center">Humidity:</h6>
                <p className="card-text-center"> </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card h-70 text-white bg-transparent border border-transparent">
              <div className="card-body">
                <span className="wind-icon">
                  <i className="fas fa-wind"></i>
                </span>
                <h6 className="card-title text-center">Wind:</h6>
                <p className="card-text-center"> </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card h-70 text-white bg-transparent border border-transparent">
              <div className="card-body">
                <span className="pressure-icon"></span>
                <h6 className="card-title text-center">Pressure:</h6>
                <p className="card-text-center"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-uppercase">
        <span className="label">Next 5 days</span>
      </h4>
    </div>
  );
}
