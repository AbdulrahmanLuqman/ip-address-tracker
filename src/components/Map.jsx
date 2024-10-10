import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react"
// import { Icon } from "leaflet"
// import customIconUrl from "../assets/icon-arrow.svg"

const Map = ({isLoaded, marker,setMarker,geolocation}) => {

  useEffect(()=>{
    setMarker()
  },[geolocation])

    // const customIcon = new Icon({
    //   iconUrl: "https://www.flaticon.com/free-icon/pin_484167?term=location&page=1&position=8&origin=search&related_id=484167",
    //   iconSize: [38, 38]
    // })
  return (
    <div className="h-full w-full">
      {
        isLoaded? 
        <MapContainer center={marker} zoom={13}>
          <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            // url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
          />
          <Marker position={marker}>
            <Popup><h3>lol</h3></Popup>
          </Marker>
        </MapContainer>: <>loading...</>
      }
    </div>
  )
}

export default Map