import CounsellorGrid from "./Component/Counsellor_Grid";
import DevGrid from "./Component/Dev_Grid";
import imgfor from "./assets/image-12@2x.png"

const img = "/src/PageGroup/People/assets";

const Developer = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          className="absolute left-[756.5px] top-[-731px] h-[1400.2px] w-[1400px] object-contain"
          alt=""
          src={`${img}/polygon-18@2x.png`}
        />
        <img
          className="absolute left-[1250px] top-[-268px] h-[575.1px] w-[574.2px] rotate-[125deg] object-contain"
          alt=""
          src={`${img}/polygon-17@2x.png`}
        />

        <div className="absolute left-[9px] top-[150px] -z-10 hidden h-36 w-[139px] rounded-[50%] bg-green-200 sm:block" />
        <div className="absolute left-[529px] top-[193px] -z-10 h-[194px] w-[194px] rounded-[50%] bg-green-200" />

        <div className="m-4 flex flex-col items-center justify-evenly sm:m-2 lg:flex-row">
          <div className="max-w-[650px] lg:w-[50%]">
            <div className="text-4xl font-bold lg:text-6xl">
              <p>
                <span className="text-[#046B09]">M</span>
                <span>EET</span>
              </p>
              <p className="text-black">
                <span className="text-[#046B09]">D</span>
                <span>{`EVELOPMENT `}</span>
                <span className="text-[#046B09]">T</span>
                <span className="text-black">{`EAM `}</span>
              </p>
            </div>
            <p className="my-2 mr-2 text-base font-medium lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus impedit, culpa assumenda aliquid dicta facilis
              voluptatem sed autem sequi ipsum velit doloremque omnis eaque nam
              sit maxime aspernatur dolor reprehenderit.
            </p>
            <button className="text-md rounded-lg bg-[#046B09] px-6 py-2 text-white hover:bg-[#1c8721]">
              Know More...
            </button>
          </div>
          <img
            className="h-auto w-full object-contain md:h-[550px] lg:h-[700px] lg:w-[45%]"
            src={`${imgfor}`}
          />
        </div>
        <img
          className="absolute left-[9px] top-[550px] h-[173px]  w-[309px] object-contain pb-12"
          src={`${img}/vector-72@2x.png`}
        />
        <img
          className="absolute left-[-37px] top-[600px] h-[173px]  w-[309px] object-contain pb-12"
          src={`${img}/vector-72@2x.png`}
        />
      </div>

      <div>
        <div className="mb-24 mt-4 bg-green-200 text-center text-3xl font-medium text-[#000000d8]">
          Counsellors
        </div>
        <CounsellorGrid />
        <div className="lg:16 mb-24 mt-4 bg-green-200 text-center text-3xl font-medium text-[#000000d8] md:mb-28">
          Student Developers
        </div>
        <DevGrid />
      </div>
    </div>
  );
};

export default Developer;
