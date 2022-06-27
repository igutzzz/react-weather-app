import { useState, useEffect } from "react";
import './CurrentWeather.css'

let baseURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-23.56136592&lon=-46.6204834&appid=c765fc40bb2e410d490051d8955652e3&units=metric'

let geocodingURL = 'http://api.openweathermap.org/geo/1.0/reverse?lat=-23.56136592&lon=-46.6204834&appid=c765fc40bb2e410d490051d8955652e3'

export default function CurrentWeather(props){
    const [weather, setWeather] = useState({});
    const [name, setName] = useState({});

    useEffect(()=>{
        fetch(baseURL)
        .then(response => response.json())
        .then(data => setWeather(data));
        fetch(geocodingURL)
        .then(response => response.json())
        .then(data => setName(data))
    }, [])

    console.log(weather)
    console.log(name[0])

    return (
        <main>
            {weather.current ? (
                <div>
                    {name[0].local_names ? <h1>{name[0].local_names.pt}</h1> : null}
                    <h2>{Math.round(weather.current.temp)} ºC</h2>
                    <img src={'../../icons/' + weather.current.weather[0].icon + '.svg'} alt={weather.current.weather[0].description} className="icon" />
                    <h3>Sensação Térmica {Math.round(weather.current.feels_like)} ºC</h3>
                </div>
            ) : null}
        </main>
    )
}