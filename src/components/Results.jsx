import PropTypes from "prop-types"

const Results = ({geolocation, setGeolocation}) => {
    console.log(geolocation)
    const ipAddresss = geolocation.ip
    const location = `${geolocation.country_name}, ${geolocation.state_prov}, ${geolocation.zipcode}`
    const city = geolocation.city
    const isp = geolocation.isp

    // if(!geolocation.ipAddresss) return 2

  return (
    <>
    <div className="flex flex-row max-[836px]:flex-col max-[836px]:w-[450px] max-[487px]:w-[90%] justify-center gap-6 bg-white rounded-lg shadow-lg p-8">
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">IP ADDRESS</h2>
            <p className="text-lg font-bold">{ipAddresss}</p>
        </div>
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">LOCATION</h2>
            <p className="text-lg font-bold">{location}</p>
        </div>
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">TIMEZONE</h2>
            <p className="text-lg font-bold">{city}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
            <h2 className="text-[12px] font-semibold text-gray-400">ISP</h2>
            <p className="text-lg font-bold">{isp}</p>
        </div>
    </div>
    </>
  )
}

export default Results

Results.propTypes = {
    geolocation: PropTypes.object,
    setGeolocation: PropTypes.func
  }