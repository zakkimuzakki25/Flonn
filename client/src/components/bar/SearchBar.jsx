import ArrowDown from "../../assets/icon/map/ArrowDown.svg";

/* eslint-disable react/prop-types */
const SearchBar = ({
  textLabel,
  id,
  holder,
  handleChange,
  text,
  options = [],
}) => {
  return (
    <div className="flex flex-col items-start gap-1 sm:gap-y-3 self-stretch relative">
      {textLabel && (
        <label
          htmlFor={id}
          className="self-stretch text-black font-inter text-xs sm:text-lg font-medium leading-6"
        >
          {textLabel}
        </label>
      )}
      <div className="flex w-full xl:w-full hover:cursor-pointer bg-white z-0 rounded-full border-2 border-onyx overflow-hidden">
        <select
          value={text}
          id={id}
          className="w-full xl:w-full text-xs sm:text-base py-2 px-3 md:py-3 md:px-4 lg:py-2 lg:px-2 focus:outline-none appearance-none hover:cursor-pointer bg-white bg-opacity-0 z-20"
          onChange={handleChange}
        >
          <option selected value="" disabled>
            <p className="bl">
                {holder}
            </p>
          </option>
          <option value={``} className="bl">
              <p className="bl">Semua</p>
            </option>
          {options.map((option) => (
            <option key={option.id} value={`${option.id}#${option.nama}`} className="bl">
              <p className="bl">
                {option}
              </p>
            </option>
          ))}
        </select>
        <img className="absolute right-2 self-center z-10" src={ArrowDown} />
      </div>
    </div>
  );
};

export default SearchBar;
