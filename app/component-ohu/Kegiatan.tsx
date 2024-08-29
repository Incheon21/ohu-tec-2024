"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

// import pictures
import Image from "next/image";
import tecfest from "/public/assets/image/tecfest.jpg";
import intern from "/public/assets/image/tecinternship.jpg";
import incubator from "/public/assets/image/incubatorbisnis.jpg";
import compvis from "/public/assets/image/compvis.jpg";
import tecmeout from "/public/assets/image/tecmeout.jpg";

function getWindowWidth() {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  }
}

const PriceList = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(getWindowWidth);
    };
    window.addEventListener("resize", updateWidth);

    return () => {};
    // window.addEventListener("resize", handleResize)
  });
  function arrowStyle(windowWidth: number) {
    if (windowWidth >= 640) {
      return { "--swiper-navigation-sides-offset": "30vw" };
    } else if (windowWidth >= 570) {
      return { "--swiper-navigation-sides-offset": "10vw" };
    } else {
      return { "--swiper-navigation-sides-offset": "0vw" };
    }
  }

  return (
    <div
      id="kegiatan"
      className="items-center justify-center w-screen py-20 scroll-smooth font-Poppins"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center justify-center w-full px-5 text-center h-1/2"
      >
        <h1 className="text-2xl font-bold lg:text-4xl ">What We Do</h1>
        {/* <p className="w-2/3 mx-2 mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur. Tortor cras mattis sit id
          maecenas dictum interdum luctus in. Nibh malesuada non mauris non
          risus. Vel gravida eget justo aenean ultricies auctor risus.
        </p> */}
      </motion.div>
      <div className="w-screen h-1/2 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={arrowStyle(windowWidth as number) as any}
        >
          <SwiperSlide>
            <div className="flex justify-center w-screen">
              <div className="w-[60vw] h-[80vw] min-[450px]:w-[40vw] min-[450px]:h-[50vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw]  lg:w-[25vw] lg:h-[30vw] mt-9 min-[500px]:mt-10 md:mt-7 ">
                <div className="w-full bg-red-200 h-1/2">
                  <Image
                    src={tecfest}
                    alt="tecfest Image"
                    className="w-full h-full"
                  />

                </div>
                <div
                  className="flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-8"
                >
                  <h2 className="font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg ">
                    TECFest
                  </h2>
                  <p className="text-[8px] sm:text-[10px]  min-[1300px]:text-[12px] min-[1300px]:pt-2 line-clamp-6 min-[1400px]:line-clamp-none">
                    TECFest adalah entrepreneurial festival yang diadakan secara tahunan. TECFest dimulai pada tahun 2019 dan kini sedang dilaksanakan TECFest yang ke-5 dengan visi "Catalyzing Indonesia's Future Entrepreneurs Through Technology and Youth-Led Innovations". TECFest terdiri dari berbagai rangkaian, seperti Business Competitions, Youth Entrepreneur Lab, Start Up EXPO, dan sebagainya. 

                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex justify-center w-screen">
              <div className="w-[60vw] h-[80vw] min-[450px]:w-[40vw] min-[450px]:h-[50vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw]  lg:w-[25vw] lg:h-[30vw] mt-9 min-[500px]:mt-10 md:mt-7 ">
                <div className="w-full bg-red-200 h-1/2">
                  <Image
                    src={intern}
                    alt="tecfest Image"
                    className="w-full h-full"
                  />

                </div>
                <div
                  className="flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-8"
                >
                  <h2 className="font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg ">
                    TEC Internship
                  </h2>
                  <p className="text-[8px] sm:text-[10px]  min-[1300px]:text-[12px] min-[1300px]:pt-2">
                  TEC Internship merupakan wadah pengembangan, pembinaan, dan pendidikan bagi  calon anggota TEC ITB untuk mempersiakan diri sebelum secara resmi menjadi bagian dari TEC ITB. 

                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex justify-center w-screen">
              <div className="w-[60vw] h-[80vw] min-[450px]:w-[40vw] min-[450px]:h-[50vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw]  lg:w-[25vw] lg:h-[30vw] mt-9 min-[500px]:mt-10 md:mt-7 ">
                <div className="w-full bg-red-200 h-1/2">
                  <Image
                    src={incubator}
                    alt="tecfest Image"
                    className="w-full h-full"
                  />

                </div>
                <div
                  className="flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-8"
                >
                  <h2 className="font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg ">
                    Incubator Bisnis
                  </h2>
                  <p className="text-[8px] sm:text-[10px]  min-[1300px]:text-[12px] min-[1300px]:pt-2">
                  Incubator Bisnis merupakan program TEC yang akan membimbing anggotanya untuk memenuhi tujuan dan kebutuhan tiap anggota baik dalam hal membuat bisnis maupun ketertarikan dalam mengikuti perlombaan mengenai bisnis.

                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex justify-center w-screen">
              <div className="w-[60vw] h-[80vw] min-[450px]:w-[40vw] min-[450px]:h-[50vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw]  lg:w-[25vw] lg:h-[30vw] mt-9 min-[500px]:mt-10 md:mt-7 ">
                <div className="w-full bg-red-200 h-1/2">
                  <Image
                    src={compvis}
                    alt="tecfest Image"
                    className="w-full h-full"
                  />

                </div>
                <div
                  className="flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-8"
                >
                  <h2 className="font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg ">
                    Company Visit
                  </h2>
                  <p className="text-[8px] sm:text-[10px]  min-[1300px]:text-[12px] min-[1300px]:pt-2">
                    Company Visit merupakan salah satu program TEC dengan mengunjungi perusahaan tertentu agar mendapatkan wawasan yang lebih mendalam mengenai bagaimana sebuah perusahaan berorganisasi.

                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex justify-center w-screen">
              <div className="w-[60vw] h-[80vw] min-[450px]:w-[40vw] min-[450px]:h-[50vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw]  lg:w-[25vw] lg:h-[30vw] mt-9 min-[500px]:mt-10 md:mt-7 ">
                <div className="w-full bg-red-200 h-1/2">
                  <Image
                    src={tecmeout}
                    alt="tecfest Image"
                    className="w-full h-full"
                  />

                </div>
                <div
                  className="flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-8"
                >
                  <h2 className="font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg ">
                    TECMeOut
                  </h2>
                  <p className="text-[8px] sm:text-[10px]  min-[1300px]:text-[12px] min-[1300px]:pt-2">
                    TECMeOut merupakan salah satu program TEC yang bertujuan mempererat ikatan di antara para anggota melalui kegiatan-kegiatan seperti berolahraga bersama atau bahkan sekedar riding dan jalan-jalan bersama.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PriceList;
