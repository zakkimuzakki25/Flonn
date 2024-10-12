

// eslint-disable-next-line react/prop-types
const PrimerButton3 = ({name, handle, type, icon, widthType = "full"}) => {
    return (
        <button className={`flex py-2 button hover:brightness-95 justify-center items-center w-${widthType} text-onyx rounded-2xl bg-jasmine shadow-s-default px-7`} onClick={handle} type={type}>
            {icon && <img src={icon} className="mr-2" alt="icon" /> }
            {name}
        </button>
    )
}

export default PrimerButton3