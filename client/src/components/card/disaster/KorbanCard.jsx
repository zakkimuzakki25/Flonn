// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const KorbanCard = ({data}) => {
  const [totalMeninggal, setTotalMeninggal] = useState(0)
  const [totalHilang, setTotalHilang] = useState(0)
  const [totalTerluka, setTotalTerluka] = useState(0)
  const [totalMengungsi, setTotalMengungsi] = useState(0)

  useEffect(() => {
    setTotalMeninggal(0)
    setTotalHilang(0)
    setTotalTerluka(0)
    setTotalMengungsi(0)
    if (data && Array.isArray(data)) {
      // eslint-disable-next-line react/prop-types
      data.forEach((item) => {
        setTotalMeninggal(totalMeninggal + item.deaths)
        setTotalHilang(totalHilang + item.missing)
        setTotalTerluka(totalTerluka + item.injured)
        setTotalMengungsi(totalMengungsi + item.evacuated)
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full h-fit flex flex-col bg-transparent rounded-3xl">
      <div className="ds text-white text-center pt-1 px-24 pb-5 bg-oldGreen w-fit rounded-t-3xl shadow-default z-10">
        KORBAN
      </div>

      <div className="relative -top-5 z-10 bg-white lg:py-12 lg:px-14 rounded-3xl flex flex-row shadow-default justify-between">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="tl text-center">Meninggal</div>
                <p className="bl">{totalMeninggal}</p>
            </div>
            <div className="line lg:mx-5 border-l-2 border-jasmine"></div>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="tl text-center">Hilang</div>
                <p className="bl">{totalHilang}</p>
            </div>
            <div className="line lg:mx-5 border-l-2 border-jasmine"></div>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="tl text-center">Terluka</div>
                <p className="bl">{totalTerluka}</p>
            </div>
            <div className="line lg:mx-5 border-l-2 border-jasmine"></div>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="tl text-center">Mengungsi</div>
                <p className="bl">{totalMengungsi}</p>
            </div>
        </div>
    </div>
  );
};

export default KorbanCard;
