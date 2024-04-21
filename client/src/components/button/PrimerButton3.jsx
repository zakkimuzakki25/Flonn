

// eslint-disable-next-line react/prop-types
const PrimerButton3 = ({name, handle, type}) => {
    return (
        <button className="flex py-2 justify-center items-center w-full text-onyx rounded-2xl bg-jasmine ds shadow-s-default" onClick={handle} type={type}>{name}</button>
    )
}

export default PrimerButton3