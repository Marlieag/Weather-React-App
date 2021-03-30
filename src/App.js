import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <WeatherApp/>
        <footer>
        Coded by Marlin Aleman and is {" "}
            <a href="/">
                open-sourced on GitHub
            </a>
        </footer>
        </div>
    );
}
