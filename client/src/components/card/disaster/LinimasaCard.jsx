/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import iconDate from "../../../assets/icon/linimasa/Date.svg"
import iconLocation from "../../../assets/icon/linimasa/Location.svg"

const LinimasaCard = ({ data }) => {
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

      <div className="bg-white min-h-full lg:py-5 lg:px-6 rounded-3xl gap-5 flex flex-col overflow-y-auto overflow-x-hidden">
        {data.length > 0 ? (data.map((list, index) => {
          return (
            <div
              key={index}
              className="bg-jasmine rounded-3xl lg:py-3 lg:px-4 flex flex-col gap-1 w-72"
            >
              <h1 className="tl">{list.disaster_type}</h1>
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-row gap-2 items-center">
                  <img src={iconDate} alt="" />
                  <p className="bl">{formatDate(list.date)}</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src={iconLocation} alt="" />
                  <div style={{lineHeight: "1.4"}}>
                    <p className="bl">{list.location}</p>
                    <p className="bl">{list.province}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })) : (
          <div
              className="bg-jasmine rounded-3xl lg:py-3 lg:px-4 flex flex-col gap-1 w-72"
            >
              <h1 className="tl self-center">Tidak ada bencana</h1>
            </div>
        )}
      </div>
    </div>
  );
};

export default LinimasaCard;
