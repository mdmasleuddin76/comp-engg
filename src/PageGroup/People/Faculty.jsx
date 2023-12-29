import {IoIosMail,IoIosCall} from 'react-icons/io'
import {faculty_data} from '../../../data/faculty_data'
import HeroSection from "../About/Component/HeroSection";
import image from "../About/assets/aboutjmi.jpeg";
import { Container } from 'react-grid-system';
function Faculty() {
  
  const HODIcon= {
    fontSize : "2rem",
    color : 'green', 
    display : 'inline',
    marginRight : '3%',
  }
  const FacultyIcon= {
    fontSize : "1rem",
    color : 'green', 
    display : 'inline',
    marginRight : '3%'
  }
  
  return (
    <div>
      

      <HeroSection heading="Faculty Members" image={image}></HeroSection>
      <div className="flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
        <div className="-mt-12 h-8 w-full backdrop-blur-[2px] " />
        <h3 className="mb-5 px-6 text-3xl font-medium">
          {" "}
          <span className="text-green-deep">Head</span> of Department
        </h3>
      </div>
      
      <div className="flex flex-wrap items-center justify-evenly">
      <div className="mt-10 mb-10 w-[488px] rounded-3xl border-2 border-[color:var(--green-deep)] bg-white p-4 shadow-md" >
          <div className="flex items-center md:items-start">
            <div>
              <img src="" alt="image" className='w-[150px] h-[150px]'/>
            </div>
            <div className="mx-4 h-[130px] w-[4px] rounded-md bg-[color:var(--green-deep)]"></div>
            <div>
              <h3 className=" text-[20px] font-medium">
              {faculty_data[0].name}
              </h3>
              <p className=" text-md font-medium text-[color:var(--green-deep)]">
              Head of Department
              </p>

              <p className="mb-1 text-sm font- ">{faculty_data[0].areaOfIntrest}</p>
                  <br></br>
                  {faculty_data[0].email ? <p><IoIosMail style={HODIcon}/>{faculty_data[0].email}</p> : null }
                  {faculty_data[0].mobileNumber ? <p><IoIosCall style={HODIcon}/>{faculty_data[0].mobileNumber}</p> : null }
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-evenly">
      <div className="flex w-full flex-col items-center justify-center py-1 font-[450]">
      
        <h3 className="mt-4 mb-5 px-6 text-2xl font-medium">
            {" "}
        <span className="text-green-deep">Professors</span> in Department
        </h3>
      </div>
      </div>
      <Container className="flex flex-wrap items-center  place-items-center grid sm:grid-cols-1 md:grid-cols-2 ">
      {faculty_data.map((professor => {
        return (<div className="mt-10 w-11/12 rounded-3xl border-2 border-[color:var(--green-deep)] bg-white p-4 shadow-md" key={professor.name}>
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
        </div>)
      }))}
      
      
    </Container>
    </div>
  );
}
export default Faculty; 