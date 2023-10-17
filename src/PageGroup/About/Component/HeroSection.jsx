import image from "../assets/aboutjmi.jpeg";

const HeroSection = () => {
  return (
    <div className="h-72 w-full" style={{ backgroundImage: `url(${image})` }}>
      <div className="flex h-72 w-full items-center justify-center backdrop-blur-sm">
        <div className="flex h-32 w-full items-center justify-center bg-green-700 bg-opacity-50">
          <h2 className="text-3xl font-semibold text-white">
            Message from HOD&apos;s Desk
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
