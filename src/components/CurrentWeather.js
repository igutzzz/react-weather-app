import { useState, useEffect } from "react";
import './CurrentWeather.css'

let baseURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-23.56136592&lon=-46.6204834&appid=c765fc40bb2e410d490051d8955652e3&units=metric'

export default function CurrentWeather(){
    const [weather, setWeather] = useState({});

    useEffect(()=>{
        fetch(baseURL)
        .then(response => response.json())
        .then(data => setWeather(data))
    }, [])

    console.log(weather)

    

    return (
        <main>
            {weather.current ? (
                <div>
                    <img src={'../../icons/' + weather.current.weather[0].icon + '.svg'} alt={weather.current.weather[0].description} className="icon" />
                    <h2>{Math.round(weather.current.temp)} ºC</h2>
                    <h3>Sensação Térmica {Math.round(weather.current.feels_like)} ºC</h3>
                </div>
            ) : null}
        </main>
    )
}