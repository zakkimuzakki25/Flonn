
// eslint-disable-next-line react/prop-types
const TooltipDisaster = ({location, coordinate, date, time, info, strength, object}) => {
    return (
      <div className="flex flex-row relative group">
          {object}
          {/* tooltip */}
          <div className="hidden group-hover:block absolute -right-5 -top-4 bg-transparent text-onyx">
            <div className="relative drop-shadow-s-default z-50" role="tooltip">
                <div className='flex flex-col bg-abu-0.75 w-fit min-w-44 rounded-2xl absolute overflow-hidden'>
                    {/* header */}
                    <div className="flex flex-row bg-jasmine px-3 py-1 gap-20 items-center">
                        <div className="flex flex-col">
                            <p className="tl">{location}</p>
                            <p className="bs text-nowrap">{coordinate}</p>
                        </div>
                        {strength && (
                            <div className="bg-oldRose h-10 w-10 rounded-full flex justify-center items-center text-white">{strength}</div>
                        )}
                    </div>
                    {/* body */}
                    <div className="flex flex-col px-3 py-1">
                        <div className="text-gray flex flex-row justify-between">
                            <p className="bs">{date}</p>
                            <p className="bs">{time}</p>
                        </div>
                        {
                        // eslint-disable-next-line react/prop-types
                        info.split('<>').map((item, index) => (
                            <p key={index} className="bs">{item}</p>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
  
  export default TooltipDisaster