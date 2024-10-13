import Background from "./components/Background"
import Loading from "./components/Loading"
import Map from "./components/Map"
import SearchBar from "./components/SearchBar"

import { useEffect, useState } from "react"

function App() {
  const [geolocation, setGeolocation] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [userIp, setUserIp] = useState("")
  // const [marker, setMarker] = useState({})
  
  // useEffect(()=> {
  //   const fetchGeoLocation = async ()=> {
  //     try {
  //       const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_dERRBirNHbCHu1WkjMWSzhTE10pfU");
  //        if(!response.ok) {
  //         throw new Error("Network error was not ok")
  //        }else{
  //         const data = await response.json();
  //         console.log(data.location.lat)

  //         setGeolocation(data)
  //         setIsLoaded(true)
  //         setMarker([data.location.lat, data.location.lng])
  //        }
  //     } catch (err) {
  //       console.log("error", err.message)
  //     }
  //   }
  //   fetchGeoLocation()
  // }, [])
  // const API_KEY = "ce2e211984b042f3acee525b2a848b55"

  useEffect(()=> {
    const fetchGeoLocation = async ()=> {
      try {
        const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=ce2e211984b042f3acee525b2a848b55&ip=${userIp || ""}`)

        if (!res.ok){
          throw new Error("Network error was not ok")
        }else {
          const data = await res.json()

          setGeolocation(data)
          setIsLoaded(true)
        }
      } catch (error) {
        console.log("error", error.message)
      }
    }

    fetchGeoLocation()
  }, [userIp])
  return (
    <main>
      {/* <Loading /> */}
      <Background />
      <SearchBar geolocation={geolocation} setGeolocation={setGeolocation} userIp={userIp} setUserIp={setUserIp} />
      <Map isLoaded={isLoaded} geolocation={geolocation}/>
    </main>
  )
}

export default App
