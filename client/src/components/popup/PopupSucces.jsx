import iconClose from "../../assets/icon/Close.svg"
import iconSucces from "../../assets/icon/Succes.svg"
import PrimerButton from "../button/PrimerButton"

// eslint-disable-next-line react/prop-types
const PopupSucces = ({heading, body, nameButton, handlerButton, handlerClose}) => {
  return (
    <div className="fixed top-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-2xl flex flex-col w-700 relative text-onyx justify-center items-center py-10">
            <button onClick={handlerClose}>
                <img
                src={iconClose}
                className="absolute top-3 right-3"
                />
            </button>

            <p style={{lineHeight: "1.3"}} className="ds text-center">{heading}</p>
            <img src={iconSucces} className="py-3"/>
            {body && <p className="bs min-h-14">{body}</p>}
            <PrimerButton name={nameButton} handle={handlerButton} widthType={"fit"}/>
        </div>
    </div>
  )
}

export default PopupSucces