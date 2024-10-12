/* eslint-disable react/prop-types */
const InfoBar = ({
    textLabel,
    id,
    text,
    icon,
  }) => {
  
    return (
        <div className="flex flex-col items-start gap-1 sm:gap-y-3 self-stretch text-default w-full">
            <label 
            htmlFor={id}
            className='self-stretch blb leading-5 text-xl'
            >
            {textLabel}
            </label>
            <div className="flex flex-row bg-abu border-0 rounded-xl w-full py-1 px-2 md:py-3 md:px-4 xl:py-2">
                <div
                    required
                    id={id}
                    className="w-full bs rounded-xl bg-abu focus:outline-none placeholder:text-onyx text-onyx"
                >{text}</div>
                {icon && (
                    <img src={icon} alt={"icon" + textLabel} />
                )}
            </div>
        </div>
    );
  };
  
  export default InfoBar