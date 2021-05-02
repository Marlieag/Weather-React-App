import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <WeatherApp defaultCity= "Denver" />
        <footer>
        Coded by Marlin Aleman and is {" "}
            <a href="https://github.com/Marlieag/Weather-React-App">
                open-sourced on GitHub
            </a>
        </footer>
        </div>
    );
}
