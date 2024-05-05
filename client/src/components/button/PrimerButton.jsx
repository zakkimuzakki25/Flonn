

// eslint-disable-next-line react/prop-types
const PrimerButton = ({name, handle, type, widthType = "full"}) => {
    return (
        <button className={`flex py-2 button justify-center items-center w-${widthType} px-5 text-white rounded-2xl bg-oldGreen shadow-s-default`} onClick={handle} type={type}>{name}</button>
    )
}

export default PrimerButton