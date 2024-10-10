import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import PropTypes from "prop-types";
// import { Icon } from "leaflet"
// import customIconUrl from "../assets/icon-arrow.svg"

const Map = (props) => {
  // logging out rops so you can what comes into the component
  // console.log('JAMADAN', props);

  const geolocation = props.geo;

  // this makes sure your map doesn't load if the geoLocation is not set
  if(!geolocation.location) return null;

  const marker = [geolocation.location.lat, geolocation.location.lng]

  return (
    <MapContainer center={[geolocation.location.lat, geolocation.location.lng]} zoom={13}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={marker}>
          <Popup><h3>lol</h3></Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map

// props validation
Map.propTypes = {
  geo: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  })
}