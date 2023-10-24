/* eslint-disable no-unused-vars */
// was giving error for React not used
import React, { useState } from 'react';

const newsData = [
  ['6/07/2023','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['6/08/2023','Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['4/09/2023','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'],
  ['6/08/2023','Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.'],
  ['8/09/2023','Nunc sed velit dignissim sodales ut eu sem integer vitae. In mollis nunc sed id.'],
  ['6/08/2023','Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.'],
  ['4/09/2023','Cursus metus aliquam eleifend mi in nulla posuere. Auctor urna nunc id cursus metus.'],
  ['6/07/2023','Augue mauris augue neque gravida in fermentum.'],
  ['6/08/2023','Volutpat lacus laoreet non curabitur gravida arcu ac tortor.'],
  ['4/09/2023','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'],
  // Add more news as needed
];

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
    <div className="main-notice-board m-4 p-4 rounded-lg">
      <h2 className="text-2xl text-center font-bold mb-4">Notice Board</h2>
      <ul className="space-y-2">
        {displayedNews.map((news, index) => (
          <li key={index} className="p-4 rounded flex gap-3">
          <p className='NB-date px-2 font-bold'>{news[0]}</p>
            <p className='font-semibold'>{news[1].substring(0,25) + '...'}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <button
          onClick={handlePrevClick}
          className="NB-button py-2 px-4 mr-2 rounded"
          disabled={page === 0}
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-chevron-left.png" alt="circled-chevron-left"/>
        </button>
        <button
          onClick={handleNextClick}
          className="NB-button py-2 px-4 rounded"
          disabled={(page + 1) * itemsPerPage >= newsData.length}
        >
            <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png" alt="circled-chevron-right--v1"/>  
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
