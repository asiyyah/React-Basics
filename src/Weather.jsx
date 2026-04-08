import React, {useState, useEffect} from "react"

function Weather(){
    const [weather, setWeather] = useState(null)
    const apikey = `3b9f7a0f1a4ffda297e664dfee53b536`
    const cityname = "Lagos"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
        .then(response => response.json())
        .then((data) => {
            setWeather(data)
        })
    }, [])

    return(
        <>
        <h1>Weather Report</h1>
          {weather ? (
                <div key={weather.id}>
                    <h2>City: {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}</p>  
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </>
    )
}
export default Weather