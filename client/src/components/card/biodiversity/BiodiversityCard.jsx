/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./BiodiversityCard.css";
import { Link } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase/Firebase";
import LoadingPic from "../../helper/LoadingPic";

const BiodiversityCard = ({
  nama,
  id,
  namaLatin,
  kingdom,
  habitat,
  status,
  photo,
}) => {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const spaceRef = ref(storage, photo.split("<>")[0]);

    getDownloadURL(spaceRef)
      .then((url) => {
        setImage(url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error getting download URL:", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <Link
      to={`/biodiversitas/${id}`}
      className="bioCard flex flex-col sm:flex-row h-56 sm:h-52 bg-oldGreen rounded-3xl sm:rounded-bioCard overflow-hidden cursor-pointer shrink-0"
    >
      <div className="flex flex-col sm:flex-row bg-white rounded-3xl sm:rounded-bioCard w-96 sm:w-550 z-10 shadow-default">
        <div className="overflow-hidden flex-shrink-0 w-full sm:w-72 h-28 sm:h-full rounded-3xl sm:rounded-bioCard">
          {isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-white">
              <LoadingPic />
            </div>
          ) : (
            <img src={image} className="w-full h-full object-cover imghover" />
          )}
        </div>

        <div className="putih flex flex-col justify-center py-3 sm:py-0 px-3 sm:pl-7 sm:pr-7 ">
          <h1 style={{ lineHeight: "1.1" }} className="tlb">
            {nama}
          </h1>
          <h2 className="bsis">{namaLatin}</h2>

          <div className="flex flex-wrap gap-1 mt-2 sm:gap-2 sm:mt-4">
            <h2 className="bg-abu px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 bs">
              {kingdom}
            </h2>
            <h2 className="bg-abu px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 bs">
              {habitat}
            </h2>
            <h2 className="bg-abu px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 bs">
              {status}
            </h2>
          </div>
        </div>
      </div>
      <div className="pelajari pr-5 ds h-full uppercase text-onyx items-center flex justify-center">
        Pelajari
      </div>
    </Link>
  );
};

export default BiodiversityCard;
