// https://geo.ipify.org/api/v2/country?apiKey=at_dERRBirNHbCHu1WkjMWSzhTE10pfU


import PropTypes from "prop-types"
import arrow from "../assets/icon-arrow.svg"
import Results from "./Results"
const SearchBar = (props) => {

  // logging out rops so you can what comes into the component
  // console.log('JAMADAN', props);

  // You need to figure out the ipAddress from the props and manage it so it can be used in the input field

  return (
    <div className="absolute top-6 right-0 left-0 w-full mx-auto flex flex-col items-center gap-8">
        <h1 className="text-white font-bold text-3xl">IP Address Tracker</h1>
        <div className="flex h-10 max-[487px]:w-[90%]">
            <input type="text" placeholder="1.1.1.1" className="h-full outline-none p-4 w-[400px] placeholder:text-gray-700 font-semibold rounded-l-lg" value={props.ipAddress}  />
            <div className="bg-gray-700 h-full w-fit p-4 rounded-r-lg">
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <Results {...props}/>
    </div>
  )
}

export default SearchBar;

// props validation
SearchBar.propTypes = {
  ipAddress: PropTypes.string
}