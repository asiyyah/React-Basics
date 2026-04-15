import React, {useState, useEffect} from "react"

function Weather(){
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const apikey = import.meta.env.VITE_WEATHER_API_KEY
    const cityname = "Lagos"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Failed to get weather data")
            }
            return response.json()
        })
        .then((data) => {
            setWeather(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false)
        })
    }, [])

    return(
        <>
        <h1>Weather Report</h1>
        {loading && <p>Loading Weather...</p>}
        {error && <p>Error: {error}</p>}
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