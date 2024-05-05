

// eslint-disable-next-line react/prop-types
const PrimerButton3 = ({name, handle, type, icon}) => {
    return (
        <button className="flex py-2 button justify-center items-center w-full text-white rounded-2xl bg-oldRose shadow-s-default" onClick={handle} type={type}>
            {icon && <img src={icon} className="mr-2" alt="icon" /> }
            {name}
        </button>
    )
}

export default PrimerButton3