import React, { useState } from "react";
const api = {
  key: "03ba6538caf6b5ed07d9a909afbf8db0",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  
  const {query, setQuery} = useState('');
  const {weather, setWeather} = useState({});

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result =>{
        setWeather(result);
        setQuery('');
        console.log(weather);
      }); 
    }
  }

  const dateBuilder = (d)=> {
    let months =["january", "February", "March", "April", "May", "June","july","August","September", "October", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`
  }

  return (
    <div className="app">
     <main>
       <div className = "search-box">
        <input 
        type = "text"
        className = "search-bar"
        placeholder="search...."
        onChange={e=> setQuery(e.target.value)}
        value = {query}
        onKeyPress = {search}
        />
        <div>
          <div className="location-box">
            <div className="location">New York city, US</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          
        </div>
        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className="weather"> Sunny </div>
        </div>
          
        
       </div>
     </main>
    </div>
  );
}

export default App;
