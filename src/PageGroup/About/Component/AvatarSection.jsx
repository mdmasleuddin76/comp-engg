import { useState } from "react";
import image from "../../../assets/icons8-error-globe-64.png";

const AvatarSection = () => {
  const [imageLoaded, setImageLoaded] = useState(true);
  return (
    <div className="flex w-full flex-col justify-start gap-x-24 gap-y-6 rounded-md px-10 sm:flex-row sm:items-center sm:gap-y-0 sm:px-8 md:px-12 lg:px-16">
      {imageLoaded ? (
        <img
          id="Government"
          alt="Prof. Bashir Alam"
          src="https://placebeard.it/640x360"
          onError={() => setImageLoaded(false)}
          className="h-48 w-48 rounded-md duration-300 object-cover object-top shadow-lg shadow-gray-400 drop-shadow-lg transition hover:scale-105"
        />
      ) : (
        <div
          className="h-48 w-48 animate-pulse rounded-md bg-gray-200 bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      <div className="flex h-fit flex-col border-l-4 border-green-deep px-4 font-semibold">
        <span className="text-green-deep">Prof. Bashir Alam</span>
        <span>Head & Professor</span>
        <span className="text-green-deep">
          Department of Computer Engineering
        </span>
      </div>
    </div>
  );
};

export default AvatarSection;
