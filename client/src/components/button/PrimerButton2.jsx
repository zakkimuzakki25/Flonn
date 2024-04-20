

// eslint-disable-next-line react/prop-types
const PrimerButton2 = ({name, handle, type}) => {
    return (
        <button className="flex py-3 button justify-center items-center w-full text-white rounded-2xl tl bg-viridian hover:bg-oldGreen button shadow-s-default" onClick={handle} type={type}>{name}</button>
    )
}

export default PrimerButton2