import { ChevronLeft, ChevronRight } from "react-feather";
import { notice } from "../../../../data/home.js";
import { NoticeCard } from "./NoticeCard.jsx";
import { useEffect, useState } from "react";

export default function NoticeBoard() {
  const [page, setPage] = useState(1);
  const [noticeData, setNoticeData] = useState([]);
  const [forwardDisabled, setForwardDisabled] = useState(false);
  const [backwardDisabled, setBackwardDisabled] = useState(true);
  useEffect(() => {
    setNoticeData(notice.slice((page - 1) * 6, page * 6));
    if (page * 6 >= notice.length) setForwardDisabled(true);
    if (page === 1) setBackwardDisabled(true);
  }, [page]);
  const handleLeftClick = () => {
    setForwardDisabled(false);
    if (page > 1) setPage(page - 1);
  };
  const handleRightClick = () => {
    setBackwardDisabled(false);
    if (page * 6 < notice.length) setPage(page + 1);
  };
  return (
    <div className="xs:px-6 m-3 flex w-full flex-col items-center justify-start sm:px-12 md:w-1/2 md:px-0">
      <div className="group relative col-span-1 mx-auto mb-5 mt-3 flex h-12 w-fit overflow-hidden rounded-md text-black ">
        <h3 className="text-xl font-semibold">
          Notice Board
          <div className="bottom-2 right-20 h-[5px] w-full rounded bg-green-700 transition-all duration-300 group-hover:w-[80%] sm:left-4" />
        </h3>
      </div>
      <ul className="my-1 space-y-3">
        {noticeData.map((data) => (
          <NoticeCard data={data} key={data.id} />
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-center space-x-4">
        <button
          onClick={handleLeftClick}
          disabled={backwardDisabled}
          className="disabled:opacity-25"
        >
          <ChevronLeft className="cursor-pointer text-gray-600 hover:text-gray-800" />
        </button>
        <button
          onClick={handleRightClick}
          disabled={forwardDisabled}
          className="disabled:opacity-25"
        >
          <ChevronRight className="cursor-pointer text-gray-600 hover:text-gray-800" />
        </button>
      </div>
    </div>
  );
}
