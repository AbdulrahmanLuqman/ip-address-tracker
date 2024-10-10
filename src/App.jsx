import Background from "./components/Background"
import Map from "./components/Map"
import SearchBar from "./components/SearchBar"

import { useEffect, useState } from "react"

function App() {
  const [geolocation, setGeolocation] = useState({location:{lat:null, lng:null}})
  const [isLoaded, setIsLoaded] = useState(false)
  const [marker, setMarker] = useState([])
  // const [error, setError] = useState(null)
  
  useEffect(()=> {
    const fetchGeoLocation = async ()=> {
      try {
        const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_dERRBirNHbCHu1WkjMWSzhTE10pfU");
         if(!response.ok) {
          throw new Error("Network error was not ok")
         }else{
          const data = await response.json();
          console.log(data.location.lat)

          setGeolocation(data)
          setIsLoaded(true)
          setMarker([data.location.lat, data.location.lng])
         }
      } catch (err) {
        console.log("error", err.message)
      }
    }

    fetchGeoLocation()
  }, [])

  // const longitude = geolocation.location.lng

  // console.log(geolocation.location.lat, geolocation.location.lng)
  return (
    <main>
      <Background />
      <SearchBar />
      <Map marker={marker} isLoaded={isLoaded}/>
    </main>
  )
}

export default App
