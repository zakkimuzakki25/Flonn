

// eslint-disable-next-line react/prop-types
const PrimerButton = ({name, handle, type}) => {
    return (
        <button className="flex py-2 button justify-center items-center w-full text-white rounded-2xl tl bg-oldGreen button shadow-default" onClick={handle} type={type}>{name}</button>
    )
}

export default PrimerButton