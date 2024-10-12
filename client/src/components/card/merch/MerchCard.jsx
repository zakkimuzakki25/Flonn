// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase/Firebase";
import LoadingPic from "../../helper/LoadingPic";
import { LoadingContext } from "../../../context/LoadingContext";
import PrimerButton3 from "../../button/PrimerButton3";
import { ConfirmationContext } from "../../../context/ConfirmationContext";
import FakeButton from "../../button/FakeButton";
// import './MerchCard.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
const MerchCard = ({ title, id, photo, rate, floint, price, userFloint }) => {
  const [image, setImage] = useState();

  const {showPopup, hidePopup} = useContext(ConfirmationContext)

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

  return (
    <div
      // to={`/merch/${id}`}
      className="donationCard flex flex-col lg:w-64 lg:h-355 bg-white rounded-3xl overflow-hidden shadow-s-default"
    >
      <div className="flex flex-col bg-white rounded-3xl h-full z-10 shadow-default">
        <div className="overflow-hidden flex-shrink-0 lg:h-60 rounded-t-3xl flex justify-center">
          {isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-white">
              <LoadingPic />
            </div>
          ) : (
            <img src={image} className="h-full imghover object-cover" />
          )}
        </div>

        <div className="putih flex flex-col w-full h-full items-start lg:px-5 lg:py-3 lg:pb-5">
          <h1 style={{ lineHeight: "1.1" }} className="tlb">
            {title}
          </h1>
          <div className="w-full h-1 bg-oldGreen lg:mt-2"></div>

          {/* harge dan rate */}
          <div className="flex flex-col w-full">
            <div className="bs lg:py-2 flex flex-row w-full gap-2">
              {/* <h1 className="w-fit flex items-center justify-center">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(price)}{" "}
              </h1>
              |  */}
              <h1 className="w-fit flex items-center justify-center">
                {floint} FLOINT
              </h1>
            </div>
            <div className="flexw-56 pt-2.5 self-end">
                {/* <p className="text-xl">{rate}</p>
                <img src={starIcon} /> */}
                {floint < userFloint ? (<PrimerButton3 name="TUKAR" widthType="fit" handle={() => {
                    showPopup({
                      title: 'Apakah kamu yakin untuk menukar barang ini?',
                      message: null,
                      confirmText: 'IYA',
                      cancelText: 'BATAL',
                      onConfirm: () => {
                        hidePopup();
                      },
                      onCancel: () => {
                        hidePopup();
                      },
                    })
                  }}/>) : (
                    <FakeButton name={"TUKAR"}/>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
