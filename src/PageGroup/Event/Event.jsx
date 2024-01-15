import { useState,useEffect } from "react";
import HeroSection from "../About/Component/HeroSection";
import project_data from "../../../data/ProjectData";
import {data} from "../../../data/events";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md"
function Event() {

  const [selectedCategory, setSelectedCategory] = useState("2017");
  const [filteredData, setFilteredData] = useState([]);
  

  useEffect(() => {
    const newData = filterData(selectedCategory);
    setFilteredData(newData);
   
  }, [selectedCategory]);

  useEffect(() => {
  }, [filteredData]);

  const filterData = (category) => {
    const key = `${category}`;
    return data[key] || [];
  };
  return (
    <div>
      <HeroSection heading={"Events"} image={project_data[0]} />
      <div className="flex w-full items-center justify-between gap-y-8 px-20 font-[450]">
          <h3 className="mb-2 px-6 text-3xl font-medium">
            <span className="text">Events</span>
          </h3>
          

          <select
            className="bg-deep text-grey border-deep-green w-32 border-3 p-4 px-4 py-2 rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            {/* Add more options as needed */}
          </select>
      </div>
      
      <div className="flex w-full items-center justify-between gap-y-8 md:px-20 xs:px-2 font-[450]">
        
          
        
        
      

      {/* Display */}

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 p-4 mx-2 md:mx-0">
        {filteredData.map((card, index) => (
          <div key={index} className="bg-green-200 rounded-md overflow-hidden">
            <div className="border-6 border-solid border-green-deep p-1">
          
              <div className="relative h-1/2 mb-4 overflow-hidden rounded-t-md">
                <img
                  className="object-cover w-full h-full rounded-t-md "
                  src={card.image}
                  alt={card.desc}
                />
                {card.tagline && <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-green-deep bg-white p-2 mb-4  inline-block" style={{ margin: '0 auto' }}>{card.tagline}</p> }
              </div>

          
              <div className="h-1/2">
                <p className="text-gray-700 mb-4 p-2 px-4 text-sm">{card.desc}</p>

                
                <div className="text-sm p-2 px-4">
                <p className="pb-2 flex"><FaLocationDot/><p className="ml-2">{card.venue}</p></p>
                  <p className="pb-2 flex"><MdOutlineAccessTimeFilled /><p className="ml-2">{card.date}</p></p>
                </div>
              </div>
            </div>
            </div>
        ))}
      </div>
      

      
      

      
      
      </div>
    </div>
  );
}
export default Event;