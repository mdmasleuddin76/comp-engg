import { useState } from "react";
import image from "../../../assets/icons8-error-globe-64.png";

const AvatarSection = () => {
  const [imageLoaded, setImageLoaded] = useState(true);
  return (
    <div className="flex w-full -translate-y-20 flex-col justify-start gap-x-24 gap-y-6 rounded-md px-10 sm:flex-row sm:items-center sm:gap-y-0 sm:px-8 md:px-12 lg:px-16">
      {imageLoaded ? (
        <img
          id="Government"
          alt="Prof. Bashir Alam"
          src="https://ieeexplore.ieee.org/mediastore_new/IEEE/content/freeimages/30/8970630/8932580/alam-2959629-small.gif"
          onError={() => setImageLoaded(false)}
          className="h-48 w-48 translate-y-12 rounded-md object-cover object-top shadow-lg shadow-gray-500 drop-shadow-lg transition duration-300 hover:scale-105"
        />
      ) : (
        <div
          className="h-48 w-48 translate-y-12 animate-pulse rounded-md bg-gray-200 bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      <div className="flex h-fit translate-y-12 flex-col border-l-4 border-green-deep px-4 font-semibold">
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
