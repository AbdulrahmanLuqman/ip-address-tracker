// https://geo.ipify.org/api/v2/country?apiKey=at_dERRBirNHbCHu1WkjMWSzhTE10pfU


import arrow from "../assets/icon-arrow.svg"
import Results from "./Results"
const SearchBar = () => {


  // console.log(geolocation.location.lat)

  return (
    <div className="absolute top-6 right-0 left-0 w-full mx-auto flex flex-col items-center gap-8">
        <h1 className="text-white font-bold text-3xl">IP Address Tracker</h1>
        <div className="flex h-10 max-[487px]:w-[90%]">
            <input type="text" placeholder="192.212.174.101" className="h-full outline-none p-4 w-[400px] placeholder:text-gray-700 font-semibold rounded-l-lg" />
            <div className="bg-gray-700 h-full w-fit p-4 rounded-r-lg">
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <Results />
    </div>
  )
}

export default SearchBar