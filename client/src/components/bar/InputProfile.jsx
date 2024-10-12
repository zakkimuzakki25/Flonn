/* eslint-disable react/prop-types */
const InputProfile = ({
    textLabel,
    type = "text",
    id,
    holder,
    handleChange,
    value,
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
                <input
                    value={value}
                    required
                    type={type}
                    id={id}
                    placeholder={holder}
                    className="w-full bs bg-abu focus:outline-none placeholder:text-onyx text-onyx"
                    onChange={handleChange}
                />
                {icon && (
                    <img src={icon} alt={"icon" + textLabel} />
                )}
            </div>
        </div>
    );
  };
  
  export default InputProfile