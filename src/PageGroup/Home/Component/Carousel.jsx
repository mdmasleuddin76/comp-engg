import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { images } from "../../../../data/home";
import { useEffect, useState } from "react";

const JmiCarousel = () => {
  const [currentindex, setcurrentindex] = useState(0);
  // Previous and Next Button
  const prev = () => {
    if (currentindex === 0) {
      setcurrentindex(images.length - 1);
    } else {
      setcurrentindex((currentindex - 1) % images.length);
    }
  };
  const next = () => {
    setcurrentindex((currentindex + 1) % images.length);
  };

  // Auto Slide
  useEffect(() => {
    const intervalid = setInterval(() => {
      setcurrentindex((currentindex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalid);
  }, [currentindex]);
  return (
    <>
      <div
        className=" relative mx-auto mb-4 mt-4 flex h-64 w-[90%] rounded-2xl border-2 border-black bg-cover bg-center shadow-2xl md:h-[470px] md:w-[90%] transition-all"
        style={{ backgroundImage: `url(${images[currentindex]})` }}
      >
        <ChevronLeft
          className=" absolute left-0 top-[50%] cursor-pointer rounded-xl bg-white bg-opacity-50"
          onClick={prev}
        />
        <ChevronRight
          className="absolute right-0 top-[50%] cursor-pointer rounded-xl bg-white bg-opacity-50"
          onClick={next}
        />
      </div>
      <div className="group relative col-span-1 mb-5 mr-[3%] flex h-12 justify-end overflow-hidden rounded-md text-black ">
        <a href="/gallery">
          <h3
            className="font-semibold"
            style={{ fontSize: "20px", marginRight: "30px" }}
          >
            View More
            <div className="bottom-2 right-20 h-[5px] w-[30px] rounded bg-green-700 transition-all duration-300 group-hover:w-[10%] sm:left-4" />
          </h3>
        </a>
      </div>
    </>
  );
};

export default JmiCarousel;
