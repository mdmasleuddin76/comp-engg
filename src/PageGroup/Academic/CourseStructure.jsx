import { useEffect, useState } from "react";
import HeroSection from "../About/Component/HeroSection";
import image from "./assets/study-book.jpeg";
import {
  courseOfferedHeaders,
  courseOfferedData,
  courseOfferedFilters,
} from "../../../data/CourseOffered";
import { CourseOfferedFilters } from "./Component/CourseOfferedFilter";

const DEFAULT_COURSE = "BTech";
const DEFAULT_SEMESTER = "Semester-1";

function CourseStructure() {
  const [selectedCourse, setSelectedCourse] = useState(DEFAULT_COURSE);
  const [selectedSemester, setSelectedSemester] = useState(DEFAULT_SEMESTER);
  const [courseData, setCourseData] = useState();

  useEffect(() => {
    const data = courseOfferedData.find((course) => {
      return (
        course.course === selectedCourse && course.semester === selectedSemester
      );
    });
    setCourseData(data?.course_data);
  }, [selectedCourse, selectedSemester]);
  return (
    <div>
      <HeroSection heading={"Course Structure"} image={image} />
      <div className="mx-auto flex w-full flex-wrap items-center justify-evenly rounded-lg bg-green-yellow p-5 md:w-[90%]">
        <h1 className="text-pretty text-3xl font-semibold text-white">
          {`${selectedCourse} (${selectedSemester})`}
        </h1>
        <CourseOfferedFilters
          options={courseOfferedFilters}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          selectedSemester={selectedSemester}
          setSelectedSemester={setSelectedSemester}
        />
      </div>
      <div className=" mx-auto mb-8 overflow-auto shadow-2xl shadow-slate-500 md:w-[90%]">
        <table className="mx-auto table w-full">
          <thead>
            <tr>
              {courseOfferedHeaders.map((item, index) => (
                <th key={index} className="w-fit bg-green-yellow text-white">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courseData?.map((course, index) => (
              <CourseData key={index} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CourseStructure;

const CourseData = ({ course }) => (
  <tr>
    <td className="bg-slate-200 text-center">{course.course_code}</td>
    <td className="bg-slate-200 text-start">{course.course_title}</td>
    <td className="bg-slate-200 text-center">{course.lecture}</td>
    <td className="bg-slate-200 text-center">{course.tutorial}</td>
    <td className="bg-slate-200 text-center">{course.practical}</td>
    <td className="bg-slate-200 text-center">{course.total}</td>
    <td className="bg-slate-200 text-center">{course.credit}</td>
  </tr>
);
