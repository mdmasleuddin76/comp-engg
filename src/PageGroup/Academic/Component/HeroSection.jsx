const HeroSection = ({ title, shortTitle, text }) => {
  return (
    <div className="h-auto w-full bg-gradient-to-r from-black to-green-deep bg-fixed">
      <div className="flex w-full flex-col-reverse items-center justify-start px-12 py-12 sm:flex-row">
        <div className="flex w-full flex-col gap-y-5 text-white">
          <div className="relative flex flex-col py-2">
            <h2 className="ml-6 text-3xl">{title}</h2>
            <h2 className="ml-6 text-3xl text-green-yellow">({shortTitle})</h2>
            <div className="absolute inset-0 h-auto w-1 rounded bg-white" />
          </div>
          <p className="text-gray-500">{text}</p>
          <button className="w-fit rounded-lg border border-gray-300 px-3 py-1 text-green-yellow">
            Course Structure {">>>"}{" "}
          </button>
        </div>
        <img
          src="/jmi-no-bg.svg"
          alt="jmi-logo"
          className="right-6 top-6 w-52"
        />
      </div>
    </div>
  );
};

export default HeroSection;
