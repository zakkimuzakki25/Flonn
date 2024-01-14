import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../bar/SearchBar";
import DropDownRound from "../bar/DropdownRound";
import { Base } from "../../api/Api";

const FilterBiodiversity = ({ handleChange }) => {
  const [nama, setNama] = useState("");
  const [kingdom, setKingdom] = useState("");
  const [habitat, setHabitat] = useState("");
  const [status, setStatus] = useState("");
  const [kingdomList, setKingdomList] = useState([]);
  const [habitatList, setHabitatList] = useState([]);
  const [statusList, setStatusList] = useState([]);

  const getList = () => {
    Base.get("/kingdom/all")
      .then((res) => {
        setKingdomList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Base.get("/habitat/all")
      .then((res) => {
        setHabitatList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Base.get("/status/all")
      .then((res) => {
        setStatusList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    // console.log("api key firebases", import.meta.env.VITE_FIREBASE_API_KEY)
    // console.log("api key maps", import.meta.env.VITE_HERE_MAPS_KEY)
    getList()
  }, []);

  useEffect(() => {
    handleChange(nama, kingdom, habitat, status);
    // console.log("kingdom id = ", kingdom)
    // console.log("habitat id = ", habitat)
    // console.log("status id = ", status)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nama, kingdom, habitat, status]);

  return (
    <div className="lg:px-20 lg:py-16 flex flex-col justify-center self-center items-center bg-white w-fit rounded-50 lg:gap-5 relative -top-28">
      <div className="search-bio">
        <SearchBar
          holder={"Search"}
          handleSubmit={(searchKey) => {
            setNama(searchKey);
          }}
        />
      </div>

      <div className="flex flex-row lg:gap-5">
        <div className="w-44">
          <DropDownRound
            holder={"Kingdom"}
            options={kingdomList}
            handleChange={(e) => {
              if (e.target.value != "") {
                setKingdom(e.target.value.split("#")[1]);
              } else {
                setKingdom("")
              }
            }}
          />
        </div>
        <div className="w-44">
          <DropDownRound
            holder={"Habitat"}
            options={habitatList}
            handleChange={(e) => {
              if (e.target.value != "") {
                setHabitat(e.target.value.split("#")[1]);
              } else {
                setKingdom("")
              }
            }}
          />
        </div>
        <div className="w-64">
          <DropDownRound
            holder={"Status Konservasi"}
            options={statusList}
            handleChange={(e) => {
              if (e.target.value != "") {
                setStatus(e.target.value.split("#")[1]);
              } else {
                setKingdom("")
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
