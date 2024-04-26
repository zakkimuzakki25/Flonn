/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import iconDate from "../../../assets/icon/linimasa/Date.svg"
import iconLocation from "../../../assets/icon/linimasa/Location.svg"
import PopupDisaster from "../../popup/PopupDisaster";

const LinimasaCard = ({ data }) => {
  const [popup, setPopup] = useState({})
  const [isPopup, setIsPopup] = useState(false)

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );
    return formattedDate;
  };

  return (
    <div className="w-full h-full flex flex-col bg-oldGreen rounded-3xl shadow-default">
      <div className="ds text-white text-center pt-1">LINIMASA</div>

      <div className="bg-white min-h-full lg:py-5 rounded-3xl flex flex-col ">
        <div className="flex flex-col overflow-y-auto overflow-x-hidden gap-5 lg:px-6">
          {data.length > 0 ? (data.map((list, index) => {
            return (
              <>
                <div
                  key={index}
                  className="bg-jasmine rounded-3xl lg:py-3 lg:px-4 flex flex-col gap-1 w-72 hover:cursor-pointer"
                  onClick={() => {
                    setPopup(list)
                    setIsPopup(true)
                  }}
                >
                  <h1 className="tl">{list.disaster_type}</h1>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-row gap-2 items-center">
                      <img src={iconDate} alt="" />
                      <p className="bs">{formatDate(list.date)}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <img src={iconLocation} alt="" />
                      <div style={{lineHeight: "1.4"}}>
                        <p className="bs">{list.location}</p>
                        <p className="bs">{list.province}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })) : (
            <div
                className="bg-jasmine rounded-3xl lg:py-3 lg:px-4 flex flex-col gap-1 w-72"
              >
                <h1 className="tl self-center">Tidak ada bencana</h1>
              </div>
          )}
          {isPopup && (
            <PopupDisaster
              photo={popup.photo}
              title={"Banjir Kota Malang"}
              date={popup.date}
              location={popup.location}
              province={popup.province}
              description={"Pada tanggal 20 Desember 2023, kawasan Lowokwaru, Kota Malang di Jawa Timur mengalami banjir yang parah. Tingginya intensitas hujan yang terjadi berjam-jam mengakibatkan meluapnya air sungai dan saluran drainase yang tidak mampu menampung aliran hujan. Akibatnya, sejumlah ruas jalan dan pemukiman warga tergenang, menyebabkan gangguan aktivitas dan kerugian materi. Tim SAR bersama warga berupaya keras untuk menolong yang terjebak banjir dan mengamankan harta benda. Kepada masyarakat yang ingin membantu, Sobat Flonn dapat berkontribusi melalui tombol donasi yang tersedia, dimana seluruh bantuan akan digunakan untuk pemulihan dan bantuan langsung kepada para korban banjir di Malang."}
              donation_id={popup.donation_id}
              setPopUp={setIsPopup}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LinimasaCard;
