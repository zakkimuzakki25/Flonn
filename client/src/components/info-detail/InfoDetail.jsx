/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const InfoDetail = ({
  h1,
  h2,
  bg,
  link_text,
  path,
  title1,
  title2,
  info1,
  info2,
  title3,
  info3,
  photos,
}) => {

  return (
    <>
      {/* banner */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="w-full h-fit lg:pt-28"
      >
        <div className="w-full h-full lg:px-40 lg:py-40 banner-2">
          <h1 style={{ lineHeight: "1.25" }} className="dl text-white lg:w-455">
            {h1}
          </h1>
          <p
            style={{ lineHeight: "1.2" }}
            className="headl text-white lg:w-455 lg:pb-2"
          >
            {h2}
          </p>
          {link_text && (
            <Link
            to={path}
            className="link-home ds flex flex-row gap-2 bg-jasmine w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-onyx lg:mt-5"
          >
            {link_text}
          </Link>
          )}
        </div>
      </div>

      {/* info putih */}
      <div className="bg-white lg:px-40 lg:py-24 lg:gap-20 flex flex-col">
        <div className="flex flex-col lg:gap-4">
            <h1 style={{ lineHeight: "1.0" }} className="ds text-onyx">
            {title1}
            </h1>
            <p className="bl text-onyx">{info1}</p>
        </div>
        <div className="flex flex-col lg:gap-4">
            <h1 style={{ lineHeight: "1.0" }} className="ds text-onyx text-right">
            {title2}
            </h1>
            <p className="bl text-onyx text-right">{info2}</p>
        </div>
      </div>

      {/* info ijo */}
      <div className="bg-oldGreen lg:px-40 lg:py-24 lg:gap-20 flex flex-col">
        <div className="flex flex-col lg:gap-10">
            <h1 style={{ lineHeight: "1.0" }} className="dl text-white">
            {title3}
            </h1>
            <p className="bl text-white">{info3}</p>
        </div>
      </div>

      {/* photos */}
      <div className="flex-col flex bg-onyx gap-10 justify-center items-center lg:py-12 lg:px-28 w-full text-white overflow-hidden">
        <div className="dl">GALERI</div>
        <div className=" flex flex-row lg: gap-10 overflow-hidden">
          {photos.map((slideImage, index)=> (
              <div key={index}>
                <div style={{'backgroundImage': `url(${slideImage})` }} className="lg:w-600 lg:h-100"/>
              </div>
            ))} 
        </div>
      </div>
    </>
  );
};

export default InfoDetail;
