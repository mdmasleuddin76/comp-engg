/* eslint-disable no-unused-vars */
// was giving error for React not used
import React, { useState } from 'react';
import notice from '../../../../data/notice.js';

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

  const displayedNews = newsData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className='main-notice'>
      <div className="main-notice-board m-4 p-4 rounded-lg">
      <h2 className="text-2xl text-center font-bold mb-4">Notice Board</h2>
      <ul className="space-y-2">
        {displayedNews.map((news) => (
          <li key={news[0]} className="p-4 rounded flex gap-3">
          <p className='NB-date px-2 font-bold'>{news[1]}</p>
            <p className='font-semibold'>{news[2].substring(0,25) + '...'}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <button
          onClick={handlePrevClick}
          className="NB-button py-2 px-2 mr-2 rounded"
          disabled={page === 0}
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-chevron-left.png" alt="circled-chevron-left"/>
        </button>
        <button
          onClick={handleNextClick}
          className="NB-button py-2 px-2 rounded"
          disabled={(page + 1) * itemsPerPage >= newsData.length}
        >
            <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png" alt="circled-chevron-right--v1"/>  
        </button>
      </div>
    </div>
    </div>
  );
};

export default NoticeBoard;
