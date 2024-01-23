import "./Hero.css";

const HeroRemastered = () => {
  return (
    <div className="z-10 h-auto w-full bg-gradient-to-r from-black to-green-deep bg-fixed">
      <div className="flex w-full flex-col-reverse items-center justify-start px-0 py-20 sm:flex-row sm:px-5 md:px-10 lg:px-20">
        <div className="flex w-full flex-col gap-y-5 text-white">
          <div className="relative flex flex-col py-2">
            <h2 className="ml-6 text-3xl">Welcome to Jamia Millia Islamia</h2>
            <h2 className="ml-6 text-3xl text-green-yellow">JMI</h2>
            <div className="absolute inset-0 h-auto w-1 rounded bg-white" />
          </div>
          <p className="text-gray-300">
            Embark on a Journey of Knowledge, Innovation, and Transformation at
            Jamia Millia Islamia - Where Excellence Meets Diversity and Shapes
            Futures.
          </p>
          <div className="mt-4 flex gap-x-3">
            <button className="w-fit rounded-lg border border-gray-300 px-3 py-1 text-green-yellow">
              Learn More {">>>"}{" "}
            </button>
            <button className="w-fit rounded-lg border border-gray-300 px-3 py-1 text-green-yellow">
              Virtual Tour {">>>"}{" "}
            </button>
          </div>
        </div>
        <img
          src="/jmi-no-bg.svg"
          alt="jmi-logo"
          className="right-6 top-6 w-72"
        />
      </div>
    </div>
  );
};

export default HeroRemastered;
