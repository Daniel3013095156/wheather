import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader'
import { getWeatherFond } from './components/fonds'

function App() {
  const [weatherInfo, setweatherInfo] = useState(null)
  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "6c8249a77da440fdf59250ef490dea43"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then (({data}) => setweatherInfo(data))
      .catch ((err) => console.log(err))

  }

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(success)
  },[])

  return (
    <main className='bg-black min-h-screen text-black bg-cover flex justify-center items-center font-principal-font p-2'
    style={{
      backgroundImage: `url(${getWeatherFond(weatherInfo)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

    {weatherInfo ? <Weather weatherInfo={weatherInfo} />: <Loader />}

    </main>
  )
}

export default App
