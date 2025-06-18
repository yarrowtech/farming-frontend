import React, { useState } from 'react';
import './Weather_pest.css';







const weatherData = [
  {
    date: "2025-05-18",
    day: "Sunday",
    temperature: "30°C",
    condition: "Sunny",
    icon: "☀️",
  },
  {
    date: "2025-05-19",
    day: "Monday",
    temperature: "28°C",
    condition: "Partly Cloudy",
    icon: "🌤️",
  },
  {
    date: "2025-05-20",
    day: "Tuesday",
    temperature: "27°C",
    condition: "Cloudy",
    icon: "☁️",
  },
  {
    date: "2025-05-21",
    day: "Wednesday",
    temperature: "25°C",
    condition: "Rainy",
    icon: "🌧️",
  },
  {
    date: "2025-05-22",
    day: "Thursday",
    temperature: "29°C",
    condition: "Thunderstorm",
    icon: "⛈️",
  },
];
















function Weather_pest() {
  const [query, setQuery] = useState('');
  const [showBanner, setShowBanner] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowBanner(e.target.value.trim().length > 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      alert(`Searching weather for "${query}"...`);
    }
  };

  return (
    <>

        <video autoPlay muted loop id="background-video">
        <source src="/Weather_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>




      <div className='header' id="w_header">

        <h1>Welcome to Weather & Pest in the world of Smart Farming</h1>
        <p>Here you can get the real-time Weather and Pest Alerts</p>


        <form onSubmit={handleSearch} className="google_search_form">
          <div className="google_search_wrapper">
            <input
              type="text"
              className="google_search_input"
              placeholder="Search Google or type a URL"
              value={query}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="google_search_button" id="gs_b">
              <img src="search.png" alt="Search" />
            </button>
          </div>
        </form>




        {showBanner && (
          <div className="search_banner">
            <p>🔍 Showing results for "<strong>{query}</strong>"</p>
            <ul>
              <li>Possible rainfall in 2 days</li>
              <li>Humidity level expected: 70%</li>
              <li>Pest alert: Aphids spotted in nearby areas</li>
            </ul>
          </div>
        )}
      </div>








      <div className="weather-forcast" id="forecast">
        <h2 className="title">5-Day Weather Forecast</h2>
        <table className="weather-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Condition</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((day, index) => (
              <tr key={index}>
                <td>{day.day}</td>
                <td>{day.date}</td>
                <td>
                  {day.icon} {day.condition}
                </td>
                <td>{day.temperature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>








<div className="pest_alerts" id="pest_alerts">
  <div className="pest_card">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const inputText = document.getElementById("pest-alert").value;

        // Example logic to generate a simple response (you can replace this with actual AI or condition-based logic)
        let response = "Please provide more details about the pests on your land.";
        if (inputText.toLowerCase().includes("yellow leaves") || inputText.toLowerCase().includes("aphid")) {
          response = "It seems like your crops might be affected by Aphids. Consider using neem oil or insecticidal soap.";
        } else if (inputText.toLowerCase().includes("white spots") || inputText.toLowerCase().includes("fungus")) {
          response = "White spots could indicate fungal infection. Use a copper-based fungicide for treatment.";
        }

        // Set popup content and show the popup
        document.getElementById("popup-text").innerText = response;
        document.getElementById("popup").style.display = "flex";
      }}
    >
      <label htmlFor="pest-alert">For Pest Alerts</label>
      <textarea
        id="pest-alert"
        placeholder="Write everything about your farm land"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  

  <div id="popup" className="popup">
    <div className="popup-content">
      <span
        className="close"
        onClick={() => {
          document.getElementById("popup").style.display = "none";
        }}
      >
        &times;
      </span>
      <h3>Pest Alert Details:</h3>
      <p id="popup-text"></p>
    </div>
  </div>
</div>


</div>








      <div className="notifications" id="notifications">
        <h1>Notifications about Smart Farming</h1>
        </div>
        <div className="tips_items">

          <div className="tips_item1">
            <div className='tips_item_text'>
              <h2>Notifications Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolorem deleniti. Reiciendis quibusdam vitae, magni dolorum minus dolor quam quia quod in placeat? Accusamus mollitia earum repellendus voluptates tempora.</p>
            </div>
          </div>

          <div className="tips_item2">
            <div className='tips_item_text'>
              <h2>Notifications Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolorem deleniti. Reiciendis quibusdam vitae, magni dolorum minus dolor quam quia quod in placeat? Accusamus mollitia earum repellendus voluptates tempora.</p>
            </div>
          </div>


          <div className="tips_item3">
            <div className='tips_item_text'>
              <h2>Notifications Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolorem deleniti. Reiciendis quibusdam vitae, magni dolorum minus dolor quam quia quod in placeat? Accusamus mollitia earum repellendus voluptates tempora.</p>
            </div>
          </div>
        </div>


















    </>
  );
}

export default Weather_pest;
