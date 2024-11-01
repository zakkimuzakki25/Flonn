import logoGoogle from '../../assets/icon/google.svg';

// eslint-disable-next-line react/prop-types
const GoogleButton = ({ handler, widthType = "full" }) => {
  return (
    <button
      className={`flex justify-center items-center button py-1.5 sm:py-3 gap-2.5 sm:gap-3 w-${widthType} bg-white hover:bg-gray-100 rounded-2xl shadow-s-default `}
      onClick={handler}
      type="button"
    >
      <img src={logoGoogle} className="w-4 sm:w-6" />
      <div className="flex self-stretch items-center text-default button uppercase text-sm sm:text-base">
      Lanjut dengan Google
      </div>
    </button>
  );
};

export default GoogleButton