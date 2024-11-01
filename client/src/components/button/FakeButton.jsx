

// eslint-disable-next-line react/prop-types
const FakeButton = ({name, widthType="full"}) => {
    return (
        <div className={`flex py-2 button px-7 justify-center items-center w-${widthType} text-white rounded-2xl tl bg-onyx`}>{name}</div>
    )
}

export default FakeButton