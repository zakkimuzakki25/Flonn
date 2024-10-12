
/* eslint-disable react/prop-types */
const DropDown = ({
  textLabel,
  id,
  holder,
  handleChange,
  text,
  optionAll,
  options = [],
  icon,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 sm:gap-y-2 self-stretch relative w-full text-onyx">
      {textLabel && (
        <label
          htmlFor={id}
          className="self-stretch text-onyx font-inter blb"
        >
          {textLabel}
        </label>
      )}
      <div className="flex flex-row w-full bg-abu z-0 rounded-xl px-3 md:px-4 lg:px-4">
        <div className=" flex w-full xl:w-full hover:cursor-pointer bg-abu z-0 rounded-xl overflow-hidden">
          <select
            value={text}
            id={id}
            className="w-full xl:w-full text-xs sm:text-base py-2 md:py-3 lg:py-2 focus:outline-none appearance-none hover:cursor-pointer bg-abu bg-opacity-0 z-20"
            onChange={handleChange}
          >
            <option selected value="" disabled>
              <p className="bl">
                  {holder}
              </p>
            </option>
            {optionAll && (
              <option value={``} className="bl">
                <p className="bl">Semua</p>
              </option>
            )}
            {options.map((option) => (
              <option key={option.id} value={`${option.id}#${option.name}`} className="bl">
                <p className="bl">
                  {option.name}
                </p>
              </option>
            ))}
          </select>
        </div>
        {icon && (
          <img src={icon} alt={"icon" + textLabel} />
        )}
      </div>
    </div>
  );
};

export default DropDown;
