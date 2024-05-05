/* eslint-disable react/prop-types */
import iconClose from "../../assets/icon/Close.svg";
import PrimerButton from "../button/PrimerButton";
import PrimerButton4 from "../button/PrimerButton4";

const PopupConfirmation = ({
  heading,
  body,
  nameButtonNo,
  nameButtonYes,
  handlerButtonNo,
  handlerButtonYes,
  handlerClose,
}) => {
  return (
    <div className="fixed top-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl flex flex-col w-700 relative text-onyx justify-center items-center py-10 gap-7 px-20">
        <button onClick={handlerClose}>
            <img
            src={iconClose}
            className="absolute top-3 right-3 cursor-pointer"
            />
        </button>

        <p style={{ lineHeight: "1.3" }} className="ds text-center">
          {heading}
        </p>
        {body && <p className="bs min-h-14">{body}</p>}
        <div className="flex flex-row gap-10">
            <div className="w-40 ">
            <PrimerButton4 name={nameButtonNo} handle={handlerButtonNo} />
            </div>
            <div className="w-40">
            <PrimerButton name={nameButtonYes} handle={handlerButtonYes} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirmation;
