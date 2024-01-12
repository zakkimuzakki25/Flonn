import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../bar/SearchBar";
import DropDownRound from "../bar/DropdownRound";

const FilterBiodiversity = ({ handleChange }) => {
  const [nama, setNama] = useState("");
  const [kingdomID, setKingdomID] = useState("");
  const [habitatID, setHabitatID] = useState("");
  const [statusID, setStatusID] = useState("");

  useEffect(() => {
    handleChange(nama, kingdomID, habitatID, statusID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nama, kingdomID, habitatID, statusID]);

  return (
    <div className="lg:px-20 lg:py-16 flex flex-col justify-center self-center items-center bg-white w-fit rounded-50 lg:gap-5 relative -top-28">
      <div className="search-bio">
        <SearchBar
          holder={"Search"}
          handleChange={(e) => {
            setNama(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-row lg:gap-5">
        <div className="w-44">
          <DropDownRound
            holder={"Kingdom"}
            handleChange={(e) => {
              if (e.target.value != "") {
                setKingdomID(e.target.value.split("#")[0]);
              }
            }}
          />
        </div>
        <div className="w-44">
          <DropDownRound
            holder={"Habitat"}
            handleChange={(e) => {
              if (e.target.value != "") {
                setHabitatID(e.target.value.split("#")[0]);
              }
            }}
          />
        </div>
        <div className="w-64">
          <DropDownRound
            holder={"Status Konservasi"}
            handleChange={(e) => {
              if (e.target.value != "") {
                setStatusID(e.target.value.split("#")[0]);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

FilterBiodiversity.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default FilterBiodiversity;
