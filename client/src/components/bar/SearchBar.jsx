import { useState } from "react";
import searchIcon from "../../assets/icon/Search.svg"

/* eslint-disable react/prop-types */
const SearchBar = ({
  handleSubmit,
  holder
}) => {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = () => {
    handleSubmit(searchKey)
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <div className="flex items-start self-stretch rounded-full border-2 border-onyx overflow-hidden bg-white py-2 px-2 w-full">
        <button
          className="flex justify-center w-3 sm:w-8 h-full cursor-pointer items-center focus:outline-none border-none hover:border-none"
          type="submit"
        >
          <img src={searchIcon} alt="Search Icon" />
        </button>
        <div className="w-full px-2 text-xxs md:text-base justify-center bg-transparent border-none">
          <input
            type="text"
            id="key"
            placeholder={holder}
            className="focus:outline-none w-full bg-white"
            autoComplete="off"
            required
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
