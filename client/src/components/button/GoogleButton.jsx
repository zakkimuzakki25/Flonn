import logoGoogle from '../../assets/icon/google.svg';

// eslint-disable-next-line react/prop-types
const GoogleButton = ({name, handler}) => {
    return (
        <button className="flex justify-center items-center button lg:py-3 lg:gap-3 w-full bg-white hover:bg-gray-100 rounded-2xl shadow-s-default " onClick={handler} type='button'>
            <img src={logoGoogle} className='w-4 lg:w-6'/>
            <div className="flex self-stretch items-center text-default button uppercase">
                {name}
            </div>
        </button>
    )
}

export default GoogleButton