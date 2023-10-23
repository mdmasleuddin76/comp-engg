import HeroSection from "./Component/HeroSection";
import Ribbon from "./Component/Ribbon";
import Why from "./Component/Why";
import { peosData } from "../../../data/academic";
import PEOCard from "./Component/PEOCard";

const title = "Master of Technology";
const text =
  "M.Tech is a two year, full time program for advanced studies and research in Computer Science, Engineering, and Technology.";

function CourseOffered() {
  return (
    <div className="h-screen w-full">
      <HeroSection title={title} shortTitle={"Mtech"} text={text} />
      <Ribbon />
      <Why />
      <div className="mx-4 my-16 flex flex-col gap-y-8 pb-48 sm:mx-8 md:mx-12 lg:mx-16">
        <div className="relative w-fit text-lg font-semibold">
          <div className="absolute h-[5px] w-full rounded bg-green-deep" />
          <p className="w-fit">Program Educational Objectives (PEOs):</p>
        </div>
        <div className="mt-2 grid w-full grid-cols-1 place-items-start gap-x-4 gap-y-12 sm:grid-cols-2 sm:place-items-center xl:grid-cols-3">
          {peosData.map((peoItem, i) => (
            <PEOCard
              key={i}
              title={peoItem.title}
              description={peoItem.description}
              icon={peoItem.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CourseOffered;
