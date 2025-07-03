import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="col-12">
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              className="search-form"
            />
            <input type="button" value="Search" className="btn primary-btn" />
          </form>
        </div>

        <div className="row">
          <div className="col-6">
            <h1>Perth</h1>
            <ul>
              <li>Thursday 13:00</li>
              <li>Sunny</li>
            </ul>
          </div>

          <div className="col-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png"
              alt="sunny"
            ></img>
            {temperature}°C
          </div>
        </div>
        <footer>
          This was coded by{" "}
          <a href="https://github.com/Ami0480" target="_blank">
            Ami Fukuyama
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ami0480/React-Weather-Search-Homework/tree/main/my-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and <a href="#">hosted on Netlify</a>.
        </footer>
      </div>
    );
  } else {
    let apiKey = "8944afa6845bd7c413a687258d3211ef";
    let city = "Perth";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
