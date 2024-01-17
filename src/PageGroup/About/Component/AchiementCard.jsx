const AchiementCard = ({ title, description }) => {
  return (
    <div className="group relative col-span-1 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow">
      <div className="flex w-full flex-col gap-y-3 bg-green-light px-4 py-4 pl-6 text-base sm:px-8 sm:pl-8 md:px-12">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
      <div className="absolute left-2 h-[80%] w-[5px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
    </div>
  );
};

export default AchiementCard;
