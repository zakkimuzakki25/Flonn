import { useContext, useState } from "react";
import iconClose from "../../assets/icon/Close.svg";
import iconPlus from "../../assets/icon/Plus.svg";
import iconMinus from "../../assets/icon/Minus.svg";
import Input from "../bar/Input";
import PrimerButton from "../button/PrimerButton";
import FakeButton from "../button/FakeButton";
import { ConfirmationContext } from "../../context/ConfirmationContext";
import { BaseAPI } from "../../api/Api";
import { SuccesContext } from "../../context/SuccesContext";
import { LoadingContext } from "../../context/LoadingContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PopUpCheckout = ({ idProduk, photo, title, floint, handlerClose, userFloint }) => {
  const [labelAlamat, setLabelAlamat] = useState("");
  const [alamatLengkap, setAlamatLengkap] = useState("");
  const [namaPenerima, setNamaPenerima] = useState("");
  const [nomorHp, setNomorHP] = useState("");
  const [jumlah, setJumlah] = useState(1);

  const {showPopup, hidePopup} = useContext(ConfirmationContext)
  const {showPopupSucces, hidePopupSucces} = useContext(SuccesContext)
  const {setIsLoading} = useContext(LoadingContext)

  const token = window.localStorage.getItem("token")

  const nav = useNavigate()

  const purchaseHandler = () => {
    setIsLoading(true);
    BaseAPI.post("merch/purchase", {
      merch_id: idProduk,
      address_label: labelAlamat,
      address: alamatLengkap,
      name: namaPenerima,
      phone_number: nomorHp,
      date: new Date().toISOString(),
      quantity: jumlah,
      floint: floint * jumlah,
      status: "diproses",
    }, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      showPopupSucces({
        title: "Penukaran Berhasil",
        message: res.data.message,
        buttonText: "Lihat Reward",
        handlerButton: () => {
          hidePopupSucces()
          nav("/profile/reward")
        },
      });
    }).catch((err) => {
      console.error(err)
    }).finally(() => {
      setIsLoading(false);
    })
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl flex flex-row w-1120 relative text-onyx justify-center items-center py-10">
        <button onClick={handlerClose}>
          <img src={iconClose} className="absolute top-3 right-3" />
        </button>

        {/* image */}
        <div className="flex w-full">
          <img src={photo} alt={"photo " + title} className="w-full object-cover"/>
        </div>

        {/* detail */}
        <div className="flex w-full flex-col px-7 gap-1">
          <h4 className="blb">{title}</h4>
          <p className="bs">{floint} FLOINT</p>

          {/* form */}
          <div className="flex flex-col px-7 py-7 rounded-3xl border-2 border-gray border-opacity-25 mt-5 mb-5">
            <p className="ds">ALAMAT PENGIRIMAN</p>
            <Input
              type="text"
              id="labelAlamat"
              holder="Label Alamat"
              handleChange={(e) => setLabelAlamat(e.target.value)}
            />
            <Input
              type="text"
              id="alamatLengkap"
              holder="Alamat Lengkap"
              handleChange={(e) => setAlamatLengkap(e.target.value)}
            />
            <Input
              type="text"
              id="namaPenerima"
              holder="Nama Penerima"
              handleChange={(e) => setNamaPenerima(e.target.value)}
            />
            <Input
              type="number"
              id="nomorHP"
              holder="Nomor HP"
              handleChange={(e) => setNomorHP(e.target.value)}
            />
          </div>

          {/* button */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3 justify-center items-center">
              <button className="rounded-md bg-black bg-opacity-15 w-8 h-8 justify-center flex items-center" onClick={() => {
                  setJumlah(jumlah-1)
                  if (jumlah <= 1) {
                    setJumlah(1)
                  }
                }}>
                <img src={iconMinus} alt="minus button" className="w-5"/>
              </button>
              <p className="bs w-4 text-center">{jumlah}</p>
              <button className="rounded-md bg-black bg-opacity-15 w-8 h-8 justify-center flex items-center" onClick={() => {
                setJumlah(jumlah+1)
                if (jumlah >= 9) {
                  setJumlah(9)
                }
              }}>
                <img src={iconPlus} alt="plus button"  className="w-5"/>
              </button>
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="font-bold bs">{floint*jumlah} Floint</p>
              <div className="w-28">
                { labelAlamat && alamatLengkap && namaPenerima && nomorHp && userFloint >= floint*jumlah ? (
                  <PrimerButton name={"Tukar"} handle={() => {
                    showPopup({
                      title: 'Apakah kamu yakin untuk menukar barang ini?',
                      message: null,
                      confirmText: 'IYA',
                      cancelText: 'BATAL',
                      onConfirm: () => {
                        purchaseHandler();
                        hidePopup();
                        handlerClose();
                      },
                      onCancel: () => {
                        hidePopup();
                      },
                    })
                  }} widthType={"full"} />
                ) : (
                  <FakeButton name={"Tukar"} widthType={"full"} />
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopUpCheckout;
