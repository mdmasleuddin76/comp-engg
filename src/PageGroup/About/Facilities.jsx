import Facilitiescomp1 from "./Component/Facilitiescomp1";
import FacilitiesData from "../../../data/FacilitiesData.js";

function Facilities() {
    console.log(FacilitiesData);
    return (
        <div>
            {FacilitiesData.map((item, index) => {
                return (
                    <Facilitiescomp1
                        key={index}
                        images={item.images}
                        content={item.content}
                        heading={item.heading}
                        css={item.css}
                    />
                );
            })}
        </div>
    )
}
export default Facilities;