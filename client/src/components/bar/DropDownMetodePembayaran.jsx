import { useState } from "react";
import ArrowDown from "../../assets/icon/map/ArrowDown.svg";
import { DataMetodePembayaran } from "../../data/DataMetodePembayaran";
import PrimerButton from "../button/PrimerButton";

/* eslint-disable react/prop-types */
const DropDownMetodePembayaran = ({
  id,
  holder,
  handleChange,
}) => {

  const [selected, setSelected] = useState(null);
  const [isSelect, setIsSelected] = useState(false);

  const handleChangeMethod = (e) => {
    
  }

  return (
    <div className="flex flex-col rounded-3xl px-12 py-10 bg-white">
      <label
        htmlFor={id}
        className="self-stretch ds text-onyx uppercase"
    >metode pembayaran</label>
      <div className="flex w-full h-fit items-center bg-white shadow-s-default z-0 rounded-2xl overflow-hidden py-5 px-7 justify-between">
        {selected ? (
          <img src={selected.logo} />
        ) : (
          <p className="blb text-gray hover:cursor-default">Pilih Metode Pembayaran</p>
        )}

        <div className="w-28">
          <PrimerButton name={`${isSelect ? "BATAL" : (selected ? "GANTI" : "PILIH") }`} handle={() => setIsSelected(!isSelect)} type="button" />
        </div>
      </div>
      <div className="flex flex-col p-4">
        {isSelect &&
          DataMetodePembayaran.map((metode, index) => (
          <div className={`flex flex-row p-5 justify-between items-center ${index != 0 && "border-t-2 border-abu w-full" } gap-5`} key={index}>
            <div className="flex flex-row">
              <div className="w-80">
                <img src={metode.logo} className="xl:h-10" />
              </div>
              <p className="tl">{metode.nama}</p>
            </div>

            <div className="w-28">
              <PrimerButton name="PILIH" handle={() => {
                setSelected(metode)
                setIsSelected(false)
              }} type="button" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownMetodePembayaran;
