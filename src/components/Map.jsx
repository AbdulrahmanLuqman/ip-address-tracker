import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import PropTypes from "prop-types"
import Loading from "./Loading"
// import { useEffect, useState } from "react"
import { Icon } from "leaflet"
// import customIconUrl from "../assets/icon-arrow.svg"

const Map = ({isLoaded, geolocation}) => {

  // console.log(geolocation)

    // console.log(marker)
    const customIcon = new Icon({
      iconUrl: "https://api.iconify.design/material-symbols:location-on.svg",
      iconSize: [38, 38]
    })
    const marker = [geolocation.latitude, geolocation.longitude]
  return (
    <>
      {
        isLoaded ? 
        <MapContainer center={marker} zoom={13} zoomControl={true} scrollWheelZoom={true}>
          <TileLayer  
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={marker} icon={customIcon}>
            <Popup><h3>lol</h3></Popup>
          </Marker>
        </MapContainer>: <><Loading/></>
      }
    </>
  )
}

export default Map

Map.propTypes = {
  geolocation: PropTypes.object,
  isLoaded: PropTypes.bool
}