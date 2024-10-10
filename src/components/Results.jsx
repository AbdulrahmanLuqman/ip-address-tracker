import PropTypes from "prop-types"

const Results = (props) => {

  // logging out rops so you can what comes into the component
  // console.log('JAMADAN', props);

  // this is the default data that will be displayed if the geolocation is not set
  let dataInfo = {
    ipAddress: '192.212.174.101',
    location: 'Nigeria, Lagos, 10020',
    timezone: 'UTC - 05:00',
    isp: 'SpaceX Starlink'
  }

  // this is the data that will be displayed if the geolocation is set
  if(props.geo && props.geo.location) {
    dataInfo = {
      ipAddress: props.geo.ip,
      location: props.geo.location.city + ', ' + props.geo.location.country + ', ' + props.geo.location.postalCode,
      timezone: props.geo.location.timezone,
      isp: props.geo.isp
    }
  }

  return (
    <div className="flex flex-row max-[836px]:flex-col max-[836px]:w-[450px] max-[487px]:w-[90%] justify-center gap-6 bg-white rounded-lg shadow-lg p-8">
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">IP ADDRESS</h2>
            <p className="text-lg font-bold">{dataInfo.ipAddress}</p>
        </div>
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">LOCATION</h2>
            <p className="text-lg font-bold">{dataInfo.location}</p>
        </div>
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">TIMEZONE</h2>
            <p className="text-lg font-bold">{dataInfo.timezone}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
            <h2 className="text-[12px] font-semibold text-gray-400">ISP</h2>
            <p className="text-lg font-bold">{dataInfo.isp}</p>
        </div>
    </div>
  )
}

export default Results;

// props validation
Results.propTypes = {
  geo: PropTypes.shape({
    ip: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      postalCode: PropTypes.string,
      timezone: PropTypes.string,
    }),
    isp: PropTypes.string,
  })
}