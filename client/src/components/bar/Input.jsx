/* eslint-disable react/prop-types */
const Input = ({
    textLabel,
    type = "text",
    id,
    holder,
    handleChange,
    value,
  }) => {
  
    return (
        <div className="flex flex-col items-start gap-1 gap-y-1 sm:gap-y-3 self-stretch text-default">
            <label 
            htmlFor={id}
            className='self-stretch tl leading-5 text-xl'
            >
            {textLabel}
            </label>
            <input
                value={value}
                required
                type={type}
                id={id}
                placeholder={holder}
                className=" w-full bs rounded-full px-4 sm:px-6 py-1.5 sm:py-3 bg-abu focus:outline-none placeholder:text-xs sm:placeholder:text-base"
                onChange={handleChange}
            />
        </div>
    );
  };
  
  export default Input