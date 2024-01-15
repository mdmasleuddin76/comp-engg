import { IoIosMail, IoIosCall } from "react-icons/io";
import { faculty_data, HOD } from "../../../data/faculty_data";
import HeroSection from "../About/Component/HeroSection";
import image from "../About/assets/aboutjmi.jpeg";
import { Container } from "react-grid-system";
import polygon18 from './assets/polygon-18@2x.png'
import polygon17 from './assets/polygon-17@2x.png'
import ellipse78 from './assets/ellipse-78@2x.png'
import image12 from './assets/image-12@2x.png'
import vector72 from './assets/vector-72@2x.png'
function Faculty() {
  const HODIcon = {
    fontSize: "2rem",
    color: "green",
    display: "inline",
    marginRight: "3%",
  };
  const FacultyIcon = {
    fontSize: "1rem",
    color: "green",
    display: "inline",
    marginRight: "3%",
  };

  return (
    <div>
      <HeroSection heading="Faculty Members" image={image}></HeroSection>
      <div className="relative overflow-hidden">
        <img
          className="absolute left-[756.5px] top-[-731px] h-[1400.2px] w-[1400px] object-contain"
          alt=""
          src={polygon18}
        />
        <img
          className="absolute left-[1250px] top-[-268px] h-[575.1px] w-[574.2px] rotate-[125deg] object-contain"
          alt=""
          src={polygon17}
        />

        <div className="lg:16 mb-24 mt-4  text-center text-3xl font-medium text-[#000000d8] md:mb-28">
          <div className="flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
            <div className="-mt-12 h-8 w-full backdrop-blur-[2px] " />
            <h3 className="mb-5 px-6 text-3xl font-medium">
              {" "}
              <span className="text-green-deep">Head</span> of Department
            </h3>
          </div>
        </div>
        <div className="py-10">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="relative mb-8 flex items-center justify-center">
              <img
                className="absolute top-[-40%] z-10 h-[150px] w-[150px] rounded-full border-2 border-green-700 object-cover"
                src={HOD.dp}
                alt="image"
              />
              <div className="relative bg-[#d7ffdab0] z-0 min-h-[250px] rounded-xl border-2 border-green-900">
                <div className="mt-8 max-w-[700px] px-16 pb-4 pt-8 text-center md:mt-8 md:px-12">
                  <div className="mb-1 text-lg font-medium">{HOD.name}</div>
                  <div className="text-bold mb-2 text-lg text-gray-900">
                    {HOD.designation}
                  </div>
                  <hr className="mx-auto my-4 w-4/5 border-t border-gray-300" />
                  <div className="text-md mb-2 text-gray-700">
                    {HOD.areaOfIntrest}
                  </div>
                  {/* <hr className="mx-auto my-4 w-4/5 border-t border-gray-300" /> */}
                  {HOD.email ? (
                    <p>
                      <IoIosMail style={HODIcon} />
                      {HOD.email}
                    </p>
                  ) : null}
                  {HOD.mobileNumber ? (
                    <p>
                      <IoIosCall style={HODIcon} />
                      {HOD.mobileNumber}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute left-[9px] top-[550px] h-[173px]  w-[309px] object-contain pb-12"
          src={vector72}
        />
        <img
          className="absolute left-[-37px] top-[600px] h-[173px]  w-[309px] object-contain pb-12"
          src={vector72}
        />
      </div>

      <div className="flex flex-wrap items-center justify-evenly">
        <div className="flex w-full flex-col items-center justify-center py-1 font-[450]">
          <h3 className="mb-5 mt-4 px-6 text-2xl font-medium"> </h3>
        </div>
      </div>
      {/* <Container className="flex flex-wrap items-center  place-items-center grid sm:grid-cols-1 md:grid-cols-2 "> */}
      <div className="lg:16 mb-24 mt-1 bg-green-200 text-center text-3xl font-medium text-[#000000d8] md:mb-28">
        Faculty Members
      </div>
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-24 p-8 py-24 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {faculty_data.map((professor, index) => {
            return (
              <div key={index}>
                <div className="relative mb-8 flex items-center justify-center">
                  <img
                    className="absolute top-[-40%] z-10 h-[150px] w-[150px] rounded-full border-2 border-green-700 object-cover"
                    src={professor.dp}
                    alt="image"
                  />
                  <div className="relative bg-[#d7ffdab0] z-0 min-h-[250px] rounded-xl border-2 border-green-900">
                    <div className="mt-8 max-w-[450px] px-16 pb-4 pt-8 text-center md:mt-8 md:px-12">
                      <div className="mb-1 text-lg font-medium">
                        {professor.name}
                      </div>
                      <div className="text-bold mb-2 text-lg text-gray-900">
                        {professor.designation}
                      </div>
                      <hr className="mx-auto my-4 w-4/5 border-t border-gray-300" />
                      <div className="text-md mb-2 text-gray-700">
                        {professor.areaOfIntrest}
                      </div>
                      {/* <hr className="mx-auto my-4 w-4/5 border-t border-gray-300" /> */}
                      {professor.email ? (
                        <p>
                          <IoIosMail style={FacultyIcon} />
                          {professor.email}
                        </p>
                      ) : null}
                      {professor.mobileNumber ? (
                        <p>
                          <IoIosCall style={FacultyIcon} />
                          {professor.mobileNumber}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}
export default Faculty;

{
  /* <div className="mt-10 w-11/12 rounded-3xl border-2 border-[color:var(--green-deep)] bg-white p-4 shadow-md" key={professor.name}>
          <div className="flex items-center md:items-start">
            <div className="w-[70px] h-[70px]">
              <img src={""} alt="image" />
            </div>
            <div className="mx-4 h-[130px] w-[4px] rounded-md bg-[color:var(--green-deep)]"></div>
            <div>
              <h3 className=" text-[20px] font-medium">
              {professor.name}
              </h3>
              <p className=" text-md font-medium text-[color:var(--green-deep)]">
              {professor.designation}
              </p>

              <p className="mb-1 text-sm font- ">{professor.areaOfIntrest}</p>
                  <br></br>
                  {professor.email ? <p><IoIosMail style={FacultyIcon}/>{professor.email}</p> : null }
                  {professor.mobileNumber ? <p><IoIosCall style={FacultyIcon}/>{professor.mobileNumber}</p> : null }
              
            </div>
          </div>
        </div> */
}
