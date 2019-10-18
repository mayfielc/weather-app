import React from "react";

import Titles from "./components/Titles";
import Weather from "./components/Weather";
import Form from "./components/Form";

const API_KEY = "0076b79db631be3626f216ece85c5e7a";


class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Titles />
          <Form />
          <Weather />

        </header>
      </div>
    )
  }
}

export default App;
