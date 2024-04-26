
// eslint-disable-next-line react/prop-types
const TooltipRegular = ({title, text, object}) => {
  return (
    <div className="flex flex-row relative group">
        {object}
        {/* tooltip */}
        <div className="hidden group-hover:block absolute -right-5 -top-4 bg-transparent">
        <div className="relative drop-shadow-s-default z-50" role="tooltip">
            <div className="w-7 h-7 bg-peachYellow -left-2 rotate-45 top-7 absolute z-0"/>
            <div className='flex flex-col text-onyx bg-peachYellow w-fit min-w-44 p-2 rounded-2xl absolute'>
                {title && <p className='button text-nowrap pr-10'>{title}</p>}
                <p className="bs">{text}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TooltipRegular