// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const RingkasanCard = ({data}) => {
  const [totalBencana, setTotalBencana] = useState(0)
  const [totalKerusakan, setTotalKerusakan] = useState(0)
  const [totalKerugian, setTotalKerugian] = useState(0)

  useEffect(() => {
    setTotalBencana(0)
    setTotalKerusakan(0)
    setTotalKerugian(0)
    if (data && Array.isArray(data)) {
      let counter = 0
      // eslint-disable-next-line react/prop-types
      data.forEach((item) => {
        counter++
        setTotalKerusakan(totalKerusakan + item.building_damage)
        setTotalKerugian(totalKerugian + item.monetary_loss)
      });
      setTotalBencana(counter)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full h-fit flex flex-col bg-transparent rounded-3xl">
      <div className="ds text-white text-center pt-1 px-24 pb-5 bg-oldGreen w-fit rounded-t-3xl shadow-default z-10">
        RINGKASAN
      </div>

      <div className="relative -top-5 z-10 bg-white lg:py-12 lg:px-14 rounded-3xl flex flex-row shadow-default justify-between">
            <div className="flex flex-col justify-center items-center gap-4 lg:px-5">
                <div className="tl text-center">Total Bencana</div>
                <p className="bl">{totalBencana}</p>
            </div>
            <div className="h-16 bg-jasmine w-0.5"/>
            <div className="flex flex-col justify-center items-center gap-4 lg:px-5">
                <div className="tl text-center">Kerusakan Bangunan</div>
                <p className="bl">{totalKerusakan}</p>
            </div>
            <div className="h-16 bg-jasmine w-0.5"/>
            <div className="flex flex-col justify-center items-center gap-4 lg:px-5">
                <div className="tl text-center">Kerugian</div>
                <p className="bl">{new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(totalKerugian)}</p>
            </div>
        </div>
    </div>
  );
};

export default RingkasanCard;
