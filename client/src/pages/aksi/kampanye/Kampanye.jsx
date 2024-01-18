import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import earthHourIMG from "../../../assets/images/kampanye/EarthOur.jpg";
import learnByIMG from "../../../assets/images/kampanye/LearnBy.jpg";
import natureMarinesIMG from "../../../assets/images/kampanye/NatureMarines.jpeg";
import edukasiBumiIMG from "../../../assets/images/kampanye/EdukasiBumi.jpg";
import zeroWasteIMG from "../../../assets/images/kampanye/ZeroWaste.jpg";
import { Link } from "react-router-dom";

const Kampanye = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-onyx lg:mt-28 lg:py-24 lg:px-40 lg:gap-24 flex flex-col">
        {/* content 1 */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-40 items-center">
            <div className="flex w-1/2">
              <div
                style={{
                  backgroundImage: `url(${earthHourIMG})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                }}
                className="rounded-50 w-105 h-105 bg-black overflow-hidden"
              ></div>
            </div>

            <div className="flex flex-col w-1/2 gap-5">
              <div className="flex flex-row gap-3">
                <div className="lg:w-3 bg-oldGreen"></div>
                <h2
                  style={{ lineHeight: "1.1" }}
                  className="dl uppercase text-white"
                >
                  earth hour but with extensions
                </h2>
              </div>
              <p style={{ lineHeight: "1.2" }} className="headm text-white">
                Berkontribusi dalam mitigasi perubahan iklim secara simbolis
                melalu beragam aksi.
              </p>
              <Link
                // to={"/"}
                className="link-home ds flex flex-row gap-2 bg-oldGreen w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-white"
              >
                Mulai
                <div className="flex flex-arrow">
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* content 2*/}
        <div className="flex flex-col w-full">
          <div className="flex flex-row-reverse gap-40 items-center">
            <div className="flex w-1/2">
              <div style={{
                  backgroundImage: `url(${learnByIMG})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                }} className="rounded-50 w-105 h-105 bg-black overflow-hidden"></div>
            </div>

            <div className="flex flex-col w-1/2 gap-5 items-end">
              <div className="flex flex-row-reverse gap-3">
                <div className="lg:w-3 z-10 bg-oldGreen"></div>
                <h2
                  style={{ lineHeight: "1.1" }}
                  className="dl uppercase text-white text-right"
                >
                  learn by doing and scrolling
                </h2>
              </div>
              <p
                style={{ lineHeight: "1.2" }}
                className="headm text-white text-right"
              >
                Pelajari keragaman hayati yang ada melalui arsip biodiversitas
                lengkap dan up to date.
              </p>
              <Link
                // to={"/biodiversitas"}
                className="link-home ds flex flex-row gap-2 bg-oldGreen w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-white"
              >
                Belajar
                <div className="flex flex-arrow">
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* content 3 */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-40 items-center">
            <div className="flex w-1/2">
              <div style={{
                  backgroundImage: `url(${natureMarinesIMG})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                }} className="rounded-50 w-105 h-105 bg-black overflow-hidden"></div>
            </div>

            <div className="flex flex-col w-1/2 gap-5">
              <div className="flex flex-row gap-3">
                <div className="lg:w-3 bg-oldGreen"></div>
                <h2
                  style={{ lineHeight: "1.1" }}
                  className="dl uppercase text-white"
                >
                  nature and marines buddies
                </h2>
              </div>
              <p style={{ lineHeight: "1.2" }} className="headm text-white">
                Berperan aktif dalam kegiatan konservasi dan kampanye lingkungan
                sebagai aksi nyata peduli lingkungan.
              </p>
              <Link
                // to={"/"}
                className="link-home ds flex flex-row gap-2 bg-oldGreen w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-white"
              >
                Mulai
                <div className="flex flex-arrow">
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* content 4*/}
        <div className="flex flex-col w-full">
          <div className="flex flex-row-reverse gap-40 items-center">
            <div className="flex w-1/2">
              <div style={{
                  backgroundImage: `url(${edukasiBumiIMG})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                }} className="rounded-50 w-105 h-105 bg-black overflow-hidden"></div>
            </div>

            <div className="flex flex-col w-1/2 gap-5 items-end">
              <div className="flex flex-row-reverse gap-3">
                <div className="lg:w-3 z-10 bg-oldGreen"></div>
                <h2
                  style={{ lineHeight: "1.1" }}
                  className="dl uppercase text-white text-right"
                >
                  edukasi lingkungan dengan mengenal bumi
                </h2>
              </div>
              <p
                style={{ lineHeight: "1.2" }}
                className="headm text-white text-right"
              >
                Mempelajari lingkungan, penyebab, pencegahan dan penanganan
                bencana melalui pendekatan sains demi generasi yang lebih baik.
              </p>
              <Link
                // to={"/biodiversitas"}
                className="link-home ds flex flex-row gap-2 bg-oldGreen w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-white"
              >
                Belajar
                <div className="flex flex-arrow">
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* content 5 */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-40 items-center">
            <div className="flex w-1/2">
              <div style={{
                  backgroundImage: `url(${zeroWasteIMG})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                }} className="rounded-50 w-105 h-105 bg-black overflow-hidden"></div>
            </div>

            <div className="flex flex-col w-1/2 gap-5">
              <div className="flex flex-row gap-3">
                <div className="lg:w-3 bg-oldGreen"></div>
                <h2
                  style={{ lineHeight: "1.1" }}
                  className="dl uppercase text-white"
                >
                  hidup sehat dengan zero waste life style
                </h2>
              </div>
              <p style={{ lineHeight: "1.2" }} className="headm text-white">
                Informasi seputar gaya hidup zero waste dengan memanfaatkan
                limbah dan mengolahnya menjadi hal baru.
              </p>
              <Link
                // to={"/"}
                className="link-home ds flex flex-row gap-2 bg-oldGreen w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-white"
              >
                Mulai
                <div className="flex flex-arrow">
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                  <div className="arrow">
                    <div>&gt;</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kampanye;
