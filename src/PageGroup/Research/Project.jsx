import { useState, useEffect } from "react";
import { project_data } from "../../../data/ProjectData";
import image from "../About/assets/aboutjmi.jpeg";
import HeroSection from "../About/Component/HeroSection";

const Project = () => {
  const [selectedNumber, setSelectedNumber] = useState("1");
  const [selectedCategory, setSelectedCategory] = useState("major");
  const [displayCategory, setDisplayCategory] = useState("Major");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const newData = filterData(selectedNumber, selectedCategory);
    setFilteredData(newData);
    setCurrentPage(1);
  }, [selectedNumber, selectedCategory]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(filteredData.slice(startIndex, endIndex));
  }, [filteredData, currentPage]);

  const filterData = (number, category) => {
    const key = `${category}${number}`;
    return project_data[key] || [];
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <HeroSection heading={"Research Projects"} image={image} />
      <div className="flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
        <div className="-mt-12 h-8 w-full backdrop-blur-[2px] " />
        <h3 className="mb-5 px-6 text-3xl font-medium">
          {" "}
          <span className="text-green-deep">Projects</span> List
        </h3>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-row gap-x-10 ">
          <label className="bg-deep text-grey border-silver  w-64 border p-4 px-4 py-2">
            Select Group Number:
            <select
              value={selectedNumber}
              onChange={(e) => setSelectedNumber(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="17">17</option>
              {/* Add more options as needed */}
            </select>
          </label>

          <label className="bg-deep text-grey border-silver w-64 border p-4 px-4 py-2">
            Select Category:
            <select
              value={selectedCategory}
              onChange={(e) => {
                setDisplayCategory(e.target.value.toUpperCase());
                setSelectedCategory(e.target.value)}}
            >
              <option value="major">Major</option>
              <option value="minor">Minor</option>
            </select>
          </label>
        </div>
      </div>

      {/* Display */}
      <div>
        <h2 className=" m-7 rounded-sm bg-green-deep p-4 text-center text-2xl font-bold text-white">
          {displayCategory} Projects of 20{selectedNumber}
        </h2>
        
      </div>

      <div className="bg-gray-100 p-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No.</th>
            <th className="py-2 px-4 border-b">Project Name</th>
            <th className="py-2 px-4 border-b">Supervisor</th>
            <th className="py-2 px-4 border-b">Students</th>
            <th className="py-2 px-4 border-b">Rollno</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((data, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{index+1}</td>
              <td className="py-2 px-4 border-b">{data.project_title}</td>
              <td className="py-2 px-4 border-b">{data.supervisor_name}</td>
              <td className="py-2 px-4 border-b">{data.names.join(", ")}{" "}</td>
              <td className="py-2 px-4 border-b">{data.roll_numbers.join(", ")}{" "}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      <div>
        <div className="flex justify-center">
          <div className="flex flex-row gap-x-10 ">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-grey border-silver w-64 border bg-green-deep p-4 px-4 py-2 hover:bg-green-700"
            >
              Previous Page
            </button>
            <span className="bg-deep text-grey w-64 border px-4 py-2">
              {" "}
              Page {currentPage}{" "}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= filteredData.length}
              className="text-grey border-silver w-64 border bg-green-deep p-4 px-4 py-2 hover:bg-green-700"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>

      <div>
      
      </div>
    </div>
  );
};

export default Project;
