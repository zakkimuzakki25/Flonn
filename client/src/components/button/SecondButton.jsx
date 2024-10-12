

// eslint-disable-next-line react/prop-types
const SecondButton = ({name, handle, type}) => {
    return (
        <button className="flex py-2 button justify-center items-center w-${widthType} px-5 text-white rounded-2xl bg-oldRose shadow-s-default" onClick={handle} type={type}>{name}</button>
    )
}

export default SecondButton