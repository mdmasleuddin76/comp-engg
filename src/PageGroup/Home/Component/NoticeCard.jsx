import { useState } from "react";
import Marquee from "react-fast-marquee";
import { ExternalLink } from "react-feather";

/**
 * NoticeCard component.
 * @param {Object} props - The props object.
 * @param {Object} props.data - The data object containing notice details.
 * @param {string} props.data.title - The title of the notice.
 * @param {string} props.data.headline - The headline of the notice.
 * @param {string} props.data.url - The url of the notice.
 * @param {string} props.data.date - The date of the notice.
 */
export const NoticeCard = ({ data }) => {
  const [play, setPlay] = useState(false);
  const [rxdt, setRxdt] = useState(0);
  return (
    <li className="relative flex items-center justify-between rounded-md bg-green-light p-3">
      <span className="w-24 font-semibold text-green-deep">{data.date}</span>
      <span
        className="flex-1 text-gray-800"
        onClick={() => {
          setPlay(true);
          setRxdt((prev) => prev + 1);
        }}
      >
        <Marquee key={rxdt} play={play} loop={1}>
          {data.headline}
        </Marquee>
      </span>
      <button
        className="opacity-30"
        onClick={() => window.open(data.url, "_blank")}
      >
        <ExternalLink className="h-5 w-5" />
      </button>
    </li>
  );
};
