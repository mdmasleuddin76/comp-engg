import React from "react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Facilitiescomp1({ num1, images, content, heading }) {
  // check odd or even
  const isEven = (num) => {
    return num1 % 2 === 0;
  };
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
    <div
      className={`mx-auto my-14 flex w-[90%] flex-wrap justify-between md:flex-nowrap ${
        isEven() ? "flex-row-" : "flex-row-reverse"
      }`}
    >
      <div
        className=" relative mx-auto flex h-64 w-[90%] rounded-2xl border-2 border-black bg-cover bg-center shadow-2xl md:h-80 md:w-[33%]"
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
      <div className="mx-auto my-9 flex w-[90%] flex-col md:my-0 md:w-[55%]">
        <h1 className=" mb-5 px-6 text-3xl font-medium text-green-yellow">
          {heading}
        </h1>
        <p className="flex-1 rounded-3xl bg-green-light p-6 shadow-2xl">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Facilitiescomp1;
