// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase/Firebase";
import LoadingPic from "../../helper/LoadingPic";
import './DonationCard.css'
import { LoadingContext } from "../../../context/LoadingContext";

// eslint-disable-next-line react/prop-types
const DonationCard = ({ title, id, photo, date }) => {
  const [image, setImage] = useState();
  const {isLoading, setIsLoading} = useContext(LoadingContext)

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

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  return (
    <Link
      to={`/aksi/donasi/${id}`}
      className="donationCard flex flex-col lg:w-64 lg:h-96 bg-oldGreen rounded-3xl overflow-hidden cursor-pointer shadow-s-default"
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

        <div className="putih flex flex-col w-full lg:h-full items-center lg:p-5">
          <p style={{ lineHeight: "1.1" }} className="tlb text-onyx text-center">
            {title}
          </p>
        </div>

        <p className="bs text-gray self-center py-4">{formatDate(date)}</p>
      </div>
      <div className="donation-label pr-5 h-full uppercase ds text-onyx items-center flex self-center justify-center">
        Donasi
      </div>
    </Link>
  );
};

export default DonationCard;
