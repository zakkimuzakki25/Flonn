// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase/Firebase";
import LoadingPic from "../../helper/LoadingPic";
import { Rating } from "@mui/material";
// import './MerchCard.css'

// eslint-disable-next-line react/prop-types
const MerchCard = ({ title, id, photo, rate, floint, price }) => {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImageURL = async () => {
      try {
        const url = await getDownloadURL(ref(storage, photo));
        setImage(url);
      } catch (error) {
        console.error("Error getting download URL:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getImageURL();
  }, [photo]);

  return (
    <Link
      to={`/merch/${id}`}
      className="donationCard flex flex-col lg:w-300 lg:h-fit bg-white rounded-3xl overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col bg-white rounded-3xl h-full z-10 shadow-default">
        <div className="overflow-hidden flex-shrink-0 lg:h-60 rounded-t-3xl flex justify-center">
          {isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-white">
              <LoadingPic />
            </div>
          ) : (
            <img src={image} className="h-full imghover" />
          )}
        </div>

        <div className="putih flex flex-col w-full h-full items-center lg:px-5 lg:py-3">
          <h1 style={{ lineHeight: "1.1" }} className="ds text-center">
            {title}
          </h1>
          <div className="w-full h-1 bg-oldGreen lg:mt-1"></div>

          {/* harge dan rate */}
          <div className="flex flex-col w-full">
            <div className="tl text-center lg:py-3 flex flex-row w-full">
              <h1 className="w-full flex items-center justify-center">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(price)}{" "}
              </h1>
              | 
              <h1 className="w-full flex items-center justify-center">
                {floint} FLOINT
              </h1>
            </div>
            <div className="flex flex-row h-full w-full items-center justify-end gap-2 pr-2">
                <p className="text-xl">{rate}</p>
                <Rating name="read-only" value={rate} readOnly size="medium"/>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MerchCard;
