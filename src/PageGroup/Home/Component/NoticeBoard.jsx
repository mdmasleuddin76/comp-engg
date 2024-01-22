/* eslint-disable no-unused-vars */
// was giving error for React not used
import React, { useState } from "react";
import { notice } from "../../../../data/home.js";
import { redirect } from "react-router-dom";

const newsData = notice;

const NoticeBoard = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayedNews = newsData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  return (
    <div className=" z-50 mt-20 pb-5 ml-3 h-full rounded-3xl bg-green-light md:w-[35%]">
      <div className=" m-3 w-full rounded-lg p-3">
        <h2 className="mb-4 text-center text-2xl font-semibold underline">
          Notice Board
        </h2>
        <div className=" h-full bg-green-light">
          <ul className="mt-5">
            {displayedNews.map((news) => (
                <li
                  key={news.id}
                  className="flex gap-3 rounded p-3 text-base sm:px-8 md:pr-1 cursor-pointer hover:bg-green-700 hover:text-white"
                  onClick={() => {
                    window.open(news.url, "_blank");
                  }}
                >
                  <p className="NB-date px-2 font-bold">{news.date}</p>
                  <p className="font-semibold">
                    {news.headline.substring(0, 65) + "..."}
                  </p>
                </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={handlePrevClick}
            className="NB-button mr-2 rounded px-2 py-2"
            disabled={page === 0}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/circled-chevron-left.png"
              alt="circled-chevron-left"
            />
          </button>
          <button
            onClick={handleNextClick}
            className="NB-button rounded px-2 py-2"
            disabled={(page + 1) * itemsPerPage >= newsData.length}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png"
              alt="circled-chevron-right--v1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
