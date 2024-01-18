

// eslint-disable-next-line react/prop-types
const PrimerButton = ({name, handle, type}) => {
    return (
        <button className="flex lg:py-2 lg:text-xl border-2 border-default justify-center items-center w-full text-white rounded-full tl bg-oldGreen" onClick={handle} type={type}>{name}</button>
    )
}

export default PrimerButton