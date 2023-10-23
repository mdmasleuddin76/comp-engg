import Facilitiescomp1 from "./Component/Facilitiescomp1";
import FacilitiesData from "../../../data/FacilitiesData.js";
import Facilitiesbelowheader from "./Component/Facilitiesbelowheader";
function Facilities() {
  console.log(FacilitiesData);
  return (
    <div>
      <Facilitiesbelowheader />
      {FacilitiesData.map((item, index) => {
        return (
          <Facilitiescomp1
            key={index}
            num1={index}
            images={item.images}
            content={item.content}
            heading={item.heading}
          />
        );
      })}
    </div>
  );
}
// this is a test for branch 
export default Facilities;
