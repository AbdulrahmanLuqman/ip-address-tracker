import arrow from "../assets/icon-arrow.svg"
import PropTypes from "prop-types"
import Results from "./Results"
import { useState } from "react"
const SearchBar = ({geolocation, setGeolocation, userIp, setUserIp}) => {
  const [inputValue, setInputValue] = useState("")

  // const [ipAddresss, setIpAddress] = useState(geolocation.ip)

  const validateIp = (ip) => {
    const ipParts = ip.split(".");
    return ipParts.length === 4 && ipParts.every(part => !!part);
  }

  // setGeolocation({ipAddresss: "192.168.32.55"})
  const handleIpAddress = (e)=> {
    setInputValue(e.target.value)
    
    if(validateIp(e.target.value)) {
      setUserIp(e.target.value)
    }
  }
  const handleClick = ()=> {
    setUserIp(inputValue)
  }

  return (
    <div className="absolute top-6 right-0 left-0 w-full mx-auto flex flex-col items-center gap-8">
        <h1 className="text-white font-bold text-3xl">IP Address Tracker</h1>
        <div className="flex h-10 max-[487px]:w-[90%]">
            <input onInput={handleIpAddress} value={inputValue} type="text" placeholder={userIp || "1.1.1.1"} className="h-full outline-none p-4 w-[400px] placeholder:text-gray-700 font-semibold rounded-l-lg" />
            <div onClick={handleClick} className="bg-gray-700 h-full w-fit p-4 rounded-r-lg">
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <Results geolocation={geolocation} setGeolocation={setGeolocation} />
    </div>
  )
}

export default SearchBar

SearchBar.propTypes = {
  geolocation: PropTypes.object,
  setGeolocation: PropTypes.func,
  userIp: PropTypes.string,
  setUserIp: PropTypes.func
}