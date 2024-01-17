import React, { useState, useEffect } from "react";
import { placementStats } from "../../../../data/placement";
import "./Table.css";
import Spc from "./Spc";

const PlacementTable = () => {
  const [selectedCourse, setSelectedCourse] = useState("SPCs");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [list, setList] = useState([]);

  useEffect(() => {
    const filteredData = placementStats.filter(
      (item) => item.course === selectedCourse && item.year === selectedYear
    );
    setList(filteredData);
  }, [selectedCourse, selectedYear]);

  return (
    <div>
      <div className="mt-12 flex flex-col items-center bg-[#6f9a66ab] p-4 font-semibold">
        <div className="mx-2 flex justify-between">
          <div>
            <label htmlFor="course" className="">
              Select:{" "}
            </label>
            <select
              id="course"
              onChange={(e) => setSelectedCourse(e.target.value)}
              value={selectedCourse}
            >
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="SPCs">SPCs</option>
            </select>
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <select
              id="year"
              onChange={(e) => setSelectedYear(e.target.value)}
              value={selectedYear}
            >
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
      </div>

      {list.length === 0 ? (
        <div className="flex items-center justify-center h-[150px]">
          <p className="text-xl align-center font-semibold">No data found!</p>
        </div>
      ) : selectedCourse === "SPCs" ? (
        <section className="m-10">
          <h2 className="mt-16 text-center text-[25px] font-medium">
            Student Placement Coordinators
          </h2>

          <div className="flex flex-wrap items-center justify-evenly">
            {list[0]?.spcList?.map((spc, i) => (
              <Spc spc={spc} key={i} />
            ))}
          </div>
        </section>
      ) : (
        // Table Section
        <div className="table-container mt-4">
          <h2 className="text-center text-[25px] font-medium">
            Placement Stats
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Package (LPA)</th>
                <th>Number of Students Placed</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <React.Fragment key={index}>
                  {item.company_name?.map((company, idx) => (
                    <tr
                      key={`company-${index}-${idx}`}
                      className={idx % 2 === 0 ? "even" : "odd"}
                    >
                      <td>{company}</td>
                      <td>{item.package?.[idx]}</td>
                      <td>{item.placed?.[idx]}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PlacementTable;
