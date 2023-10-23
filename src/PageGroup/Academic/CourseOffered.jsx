import HeroSection from "./Component/HeroSection";
import Ribbon from "./Component/Ribbon";
import Why from "./Component/Why";
import { peosData, psosData } from "../../../data/academic";
import PEOCard from "./Component/PEOCard";
import image from "./assets/success.svg";
import CoverTitle from "./Component/CoverTitle";
import PSOCard from "./Component/PSOCard";

const COURSE_TITLE = "Master of Technology";
const COURSE_SHORT_TITLE = "Mtech";
const COURSE_DESCRIPTION =
  "M.Tech is a two year, full time program for advanced studies and research in Computer Science, Engineering, and Technology.";
const PSO_COVER = "Program Specific Outcome (PSOs) : ";
const PEO_COVER = "Program Educational Objectives (PEOs) :";
const OTHER_COVER = "Other Courses : ";

function CourseOffered() {
  return (
    <div className="flex w-full flex-col gap-y-48">
      <HeroSection
        title={COURSE_TITLE}
        shortTitle={COURSE_SHORT_TITLE}
        text={COURSE_DESCRIPTION}
      />
      <Ribbon />
      <Why />
      <div className="mx-4 flex flex-col gap-y-12 sm:mx-8 md:mx-12 lg:mx-16">
        <CoverTitle text={PEO_COVER} />
        {/* PEOs */}
        <div className="grid w-full grid-cols-1 place-items-center gap-x-4 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
          {peosData.map(({ title, description, icon }) => (
            <PEOCard
              key={icon}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
      {/* Career Prospects */}
      <div className="mx-4 flex flex-col items-center justify-center sm:mx-8 sm:flex-row md:mx-12 lg:mx-16">
        <img src={image} alt="" className="h-48 w-48" />
        <div className="relative ml-4 flex flex-col gap-y-4 pl-8 sm:ml-12 md:ml-20 lg:ml-28">
          <h3 className="text-2xl font-semibold">Career Prospects : </h3>
          <div className="flex gap-y-4 rounded-md bg-green-light p-2 text-gray-800 shadow sm:p-4 md:p-6">
            The programme bears testimony to an excellent placement track
            record, with our students bagging offers from the top companies in
            the industry. The current placement season has seen the Exchanger
            companies hiring at an annual package of close to a million.The
            department also boasts of state of the art laboratory and
            infrastructure facilities for its students, thereby stimulating an
            atmosphere of research among them
          </div>
          <div className="absolute left-0 top-1/2 mt-1 h-[95%] w-1 -translate-y-1/2 rounded bg-green-deep" />
        </div>
      </div>

      <div className="mx-4 flex flex-col gap-y-12 sm:mx-8 md:mx-12 lg:mx-16">
        <CoverTitle text={PSO_COVER} />
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {psosData.map(({ code, text }) => (
            <PSOCard key={code} text={text} code={code} />
          ))}
        </div>
      </div>

      <div className="mx-4 flex flex-col gap-y-12 sm:mx-8 md:mx-12 lg:mx-16">
        <CoverTitle text={OTHER_COVER} />
        <div className="flex w-full flex-col items-center justify-between gap-x-3 gap-y-3 sm:flex-row lg:justify-around">
          <div className="flex w-full flex-col items-center justify-center rounded-md bg-green-light px-3 py-2 text-green-800 shadow sm:w-auto">
            <h3 className="text-center text-xl font-semibold">
              Batchelor of Technology
            </h3>
            <h3 className="text-center text-xl font-semibold">(B.Tech)</h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center rounded-md bg-green-light px-3 py-2 text-green-800 shadow sm:w-auto">
            <h3 className="text-center text-xl font-semibold">
              Batchelor of Engineering
            </h3>
            <h3 className="text-center text-xl font-semibold">(B.E.)</h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center rounded-md bg-green-light px-3 py-2 text-green-800 shadow sm:w-auto">
            <h3 className="text-center text-xl font-semibold">
              Ph.D. in Computer
            </h3>
            <h3 className="text-center text-xl font-semibold">Engineering</h3>
          </div>
        </div>
      </div>

      {/* To Delete */}
      <div className="mt-80" />
    </div>
  );
}

export default CourseOffered;
