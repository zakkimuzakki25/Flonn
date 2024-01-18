// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-fit lg:pt-28 banner-home">
        <div className="w-full h-full lg:px-24 lg:py-24 banner-home-2">
            <h1
              style={{ lineHeight: "1.2" }}
              className="dl text-white lg:w-100"
            >
              ADA BERBAGAI CARA UNTUK MENUNJUKKAN KEPEDULIAN TERHADAP LINGKUNGAN
            </h1>
        </div>
      </div>

      <div className="bot bg-default">
          <div className="flex flex-col w-full justify-center items-center gap-0 lg:pt-28 lg:pb-16">
            <h2 className="dl text-white">INTRODUCING.</h2>
            <h1 className="h1 text-oldGreen relative lg:-top-12">FLONN.</h1>
            <p className="headl text-white relative lg:-top-16">
              Platform arsip biodiversitas, monitoring bencana, dan aksi
              kepedulian lingkungan.
            </p>
          </div>

        {/* content 1*/}
          <div className="flex flex-col bg-oldGreen w-full rounded-t-homeContent shadow-y-axis">
            <div className="flex flex-row gap-40 py-24 items-center lg:px-40">
              <div className="flex w-1/2">
                <div className="pic-monitor rounded-full w-105 h-105 bg-black overflow-hidden"></div>
              </div>

              <div className="flex flex-col w-1/2 gap-5">
                <div className="flex flex-row gap-3">
                  <div className="lg:w-3 bg-jasmine"></div>
                  <h2
                    style={{ lineHeight: "1.1" }}
                    className="dl uppercase text-white"
                  >
                    Bencana alam apa yang ada di sekitarmu?
                  </h2>
                </div>
                <p style={{ lineHeight: "1.2" }} className="headm text-white">
                  Lebih aware terhadap bencana alam yang terjadi di sekitarmu
                  untuk mencegah hal-hal yang tidak diinginkan.
                </p>
                <Link
                  to={"/monitor"}
                  className="link-home ds flex flex-row gap-2 bg-jasmine w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-onyx"
                >
                  Intip
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

            {/* content 2*/}
              <div className="flex flex-col bg-viridian w-full rounded-t-homeContent shadow-y-axis">
                <div className="flex flex-row-reverse gap-40 py-24 items-center lg:px-40">
                  <div className="flex w-1/2">
                    <div className="pic-bio rounded-full w-105 h-105 bg-black overflow-hidden"></div>
                  </div>

                  <div className="flex flex-col w-1/2 gap-5 items-end">
                    <div className="flex flex-row-reverse gap-3">
                      <div className="lg:w-3 z-10 bg-jasmine"></div>
                      <h2
                        style={{ lineHeight: "1.1" }}
                        className="dl uppercase text-white text-right"
                      >
                        pelajari keragaman hayati di daerahmu!
                      </h2>
                    </div>
                    <p
                      style={{ lineHeight: "1.2" }}
                      className="headm text-white text-right"
                    >
                      Arsip biodiversitas yang lengkap untuk membantumu
                      mempelajari keragaman hayati di daerahmu.
                    </p>
                    <Link
                      to={"/biodiversitas"}
                      className="link-home ds flex flex-row gap-2 bg-jasmine w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-onyx"
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

                {/* content 3*/}
                  <div className="flex flex-col bg-cambridgeBlue w-full rounded-t-homeContent shadow-y-axis">
                    <div className="flex flex-row gap-40 py-24 items-center lg:px-40">
                      <div className="flex w-1/2">
                        <div className="pic-aksi rounded-full w-105 h-105 bg-black overflow-hidden"></div>
                      </div>

                      <div className="flex flex-col w-1/2 gap-5">
                        <div className="flex flex-row gap-3">
                          <div className="lg:w-3 bg-jasmine"></div>
                          <h2
                            style={{ lineHeight: "1.1" }}
                            className="dl uppercase text-white"
                          >
                            Lakukan aksi nyata untuk lingkungan!
                          </h2>
                        </div>
                        <p
                          style={{ lineHeight: "1.2" }}
                          className="headm text-white"
                        >
                          Dapatkan update informasi terkini mengenai rekruitmen
                          volunteer, donasi, hingga aksi kampanye sebagai aksi
                          nyata peduli lingkungan.
                        </p>
                        <Link
                          to={"/aksi"}
                          className="link-home ds flex flex-row gap-2 bg-jasmine w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-onyx"
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
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
