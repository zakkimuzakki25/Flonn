// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase/Firebase";
import LoadingPic from "../../helper/LoadingPic";
import './DonationCard.css'

// eslint-disable-next-line react/prop-types
const DonationCard = ({ title, deskripsi, id, photo }) => {
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
      to={`/disaster/${id}`}
      className="donationCard flex flex-col lg:w-300 lg:h-455 bg-oldGreen rounded-3xl overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col bg-white rounded-3xl h-full z-10 shadow-default">
        <div className="overflow-hidden flex-shrink-0 lg:h-44 rounded-t-3xl">
          {isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-white">
              <LoadingPic />
            </div>
          ) : (
            <img src={image} className="w-full h-full object-cover imghover" />
          )}
        </div>

        <div className="putih flex flex-col w-full lg:h-52 justify-center items-center lg:p-5">
          <h1 style={{ lineHeight: "1.1" }} className="ds text-center">
            {title}
          </h1>
          <div className="w-full h-1 bg-oldGreen lg:mt-1"></div>
          <p
            className="tl overflow-hidden lg:h-32 lg:my-2"
          >
            {deskripsi}
          </p>
        </div>
      </div>
      <div className="donation-label pr-5 h-full uppercase ds text-onyx items-center flex self-center justify-center">
        Donasi
      </div>
    </Link>
  );
};

export default DonationCard;
