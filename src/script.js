import "./style.css";

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const location = document.getElementById("location").value;
  getWeather(location);
});

async function getWeather(location) {
  try {
    const resource = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4cb935ca57f140acb4d21316241901&q=${location}`,
      {
        mode: "cors",
      }
    );   
    if (!resource.ok) {
        const errorResponse = await resource.json();
        throw new Error(`Error: ${errorResponse.error.message}`);
    } else {
      const forecastObject = await resource.json();
      const temperature = forecastObject.current.temp_f;
      const condition = forecastObject.current.condition.text; 
      const wind = forecastObject.current.wind_mph;
      const humidity= forecastObject.current.humidity;
      const result = document.getElementById("result")
      result.textContent = temperature  + " 'F  " + "condition: " + condition + "  wind: " + wind + "mph  " + "humidity: "+ humidity;
      console.log(forecastObject)
    }
  } catch({message}) {
    console.log(message);
  }
}


