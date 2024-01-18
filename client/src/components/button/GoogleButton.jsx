import logoGoogle from '../../assets/icon/google.svg';

// eslint-disable-next-line react/prop-types
const GoogleButton = ({name, handler}) => {
    return (
        <button className="flex justify-center items-center lg:py-2 lg:gap-3 w-full bg-white hover:bg-gray-100 rounded-full border-2 border-default" onClick={handler} type='button'>
            <img src={logoGoogle} className='w-4 lg:w-6'/>
            <div className="flex self-stretch items-center text-default tl lg:text-xl">
                {name}
            </div>
        </button>
    )
}

export default GoogleButton