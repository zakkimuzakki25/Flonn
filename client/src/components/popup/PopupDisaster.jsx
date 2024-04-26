import iconDate from "../../assets/icon/linimasa/Date.svg"
import iconLocation from "../../assets/icon/linimasa/Location.svg"
import PrimerButton from "../button/PrimerButton";

// eslint-disable-next-line react/prop-types
const PopupDisaster = ({photo, title, date, location, province, description, donation_id, setPopUp }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Date(dateString).toLocaleDateString(
          "id-ID",
          options
        );
        return formattedDate;
      };

    const handleOuterClick = () => {
        setPopUp(false);
    };

    const handleInnerClick = (e) => {
        e.stopPropagation()
    };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-40" onClick={handleOuterClick}>
        <div className='flex flex-row rounded-50 p-10 gap-10 bg-white items-center' onClick={handleInnerClick}>
            <img src={photo} className="h-80 w-80 object-cover" />

            <div className="flex flex-col text-onyx">
                <p className="ds">{title}</p>

                <div className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center">
                    <img src={iconDate} alt="" />
                    <p className="bs">{formatDate(date)}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                    <img src={iconLocation} alt="" />
                    <div style={{lineHeight: "1.4"}}>
                        <p className="bs">{location}</p>
                        <p className="bs">{province}</p>
                    </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="blb">Keterangan</p>
                    <p className="bs">{description}</p>
                </div>

                {donation_id && (
                    <div className="w-40">
                        <PrimerButton name={"DONASI"}/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default PopupDisaster