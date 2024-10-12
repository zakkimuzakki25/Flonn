
const LoadingPic = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-black bg-opacity-75 z-50 fixed top-0">
        <ul className="flex flex-row lg:gap-3">
            <li style={{
                animationDelay: '200ms',
            }} className="animate-grow shadow-loading delay-100 lg:w-3 lg:h-3 bg-abu rounded-full"/>
            <li style={{
                animationDelay: '400ms',
            }} className="animate-grow shadow-loading delay-300 lg:w-3 lg:h-3 bg-abu rounded-full"/>
            <li style={{
                animationDelay: '600ms',
            }} className="animate-grow shadow-loading delay-500 lg:w-3 lg:h-3 bg-abu rounded-full"/>
            <li style={{
                animationDelay: '800ms',
            }} className="animate-grow shadow-loading delay-700 lg:w-3 lg:h-3 bg-abu rounded-full"/>
            <li style={{
                animationDelay: '1000ms',
            }} className="animate-grow shadow-loading delay lg:w-3 lg:h-3 bg-abu rounded-full"/>
        </ul>
    </div>
  )
}

export default LoadingPic