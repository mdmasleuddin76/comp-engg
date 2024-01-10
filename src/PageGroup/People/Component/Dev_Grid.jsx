import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import placementData from "../../../../data/placement";

const GridItem = ({ name, degree, img, github, insta, linkedin }) => {
  return (
    <div className="relative mb-8 flex items-center justify-center">
      <img
        className="absolute top-[-50%] z-10 h-[150px] w-[150px] rounded-full border-2 border-green-700 object-cover"
        src={`${img}`}
        alt="Avatar"
      />
      <div className="relative z-0 rounded-xl border-2 border-green-900">
        <div className="mt-8 px-16 pt-8 pb-4 md:mt-8 md:px-24 text-center">
          <div className="mb-1 text-lg font-medium">{name}</div>
          <div className="text-md text-gray-700 mb-2">{degree}</div>
          <a className="cursor-pointer" href={github}  target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-[#046B09] text-xl mr-2" icon={faGithub} />
          </a>
          <a className="cursor-pointer" href={insta} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-[#046B09] text-xl mr-2" icon={faInstagram} />
          </a>
          <a className="cursor-pointer" href={linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-[#046B09] text-xl" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-24 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {placementData[3].map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
