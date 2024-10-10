
const Results = () => {
  return (
    <div className="flex flex-row max-[836px]:flex-col max-[836px]:w-[450px] max-[487px]:w-[90%] justify-center gap-6 bg-white rounded-lg shadow-lg p-8">
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">IP ADDRESS</h2>
            <p className="text-lg font-bold">192.212.174.101</p>
        </div>
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">LOCATION</h2>
            <p className="text-lg font-bold">Nigeria, Lagos, 10020</p>
        </div>
        <div className="border-r pr-10 flex flex-col items-center gap-1 max-[836px]:border-none max-[836px]:p-0">
            <h2 className="text-[12px] font-semibold text-gray-400">TIMEZONE</h2>
            <p className="text-lg font-bold">UTC - 05:00</p>
        </div>
        <div className="flex flex-col items-center gap-1">
            <h2 className="text-[12px] font-semibold text-gray-400">ISP</h2>
            <p className="text-lg font-bold">SpaceX Starlink</p>
        </div>
    </div>
  )
}

export default Results