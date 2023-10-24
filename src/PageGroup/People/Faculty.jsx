import { Container, Row, Col } from 'react-grid-system';
import {IoIosMail,IoIosCall} from 'react-icons/io'
import background from '../../../src/assets/faculty_people.png'
import {faculty_data} from '../../../data/faculty_data'
function Faculty() {
  const innerHeading = {
    color: "white",
    backgroundColor: "green",
    opacity: "0.5",
    padding: "10px",
    fontFamily: "Sans-Serif",
    width: '100%',
    height : '50%',
    fontSize : '3rem',
    textAlign: 'center',
    marginTop: '7%',
    marginBottom: '7%',
  }
  const headingImage= {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height : '100%'
  }

  const HOD={
    backgroundColor : "white",
    border: '3px solid green',
    borderRadius: '25px',
    padding: '20px',
    width: '100%',
    height: '100%',
    margin : '2% 0%',
  }
  const Faculty={
    backgroundColor : "white",
    border: '3px solid green',
    borderRadius: '25px',
    padding: '20px',
    width: '95%',
    height: '100%',
    
  }
  const FacultyImage={
    borderRight : '3px solid green'
  }
  const FacultyName={
    fontWeight : 'bold'
  }
  const HODName={
    fontWeight : 'bold',
    fontSize : '1.8rem'
  }
  const HODDesignation= {
    color : 'green',
    fontSize : '1.2rem'
  }
  const FacultyDesignation= {
    color : 'green',
    
  }
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
  const HODStatement= {
    fontSize : "1rem",
    fontStyle : 'italic',
    marginTop : "3%"
  }
  return (
    <div>
      <div style={headingImage}>
        <div style={innerHeading}><h1>FACULTY MEMBERS</h1></div>
      </div>
      <Container>

      <Container style={HOD}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={faculty_data[0].dp}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={HODName}>{faculty_data[0].name}</h1>
                  <h2 style={HODDesignation}>Head of Department</h2> 
                  <p>{faculty_data[0].areaOfIntrest}</p>
                  <h3 style={HODStatement}>A statement on Department of Computer Engineering</h3>
                  <br></br>
                  <p><IoIosMail style={HODIcon}/> {faculty_data[0].email}</p>
                  <p><IoIosCall style={HODIcon}/> {faculty_data[0].mobileNumber}</p>
              </Col>
            </Row>
      </Container>


      <Row>
      {faculty_data.map((professor => {
        return (
          <Col sm={6} style={{padding : '2% 0%'}} key={professor.name}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={professor.dp}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>{professor.name}</h1>
                  <h2 style={FacultyDesignation}>{professor.designation}</h2>
                  <p>{professor.areaOfIntrest}</p>
                  <br></br>
                  {professor.email ? <p><IoIosMail style={FacultyIcon}/>{professor.email}</p> : null }
                  {professor.mobileNumber ? <p><IoIosCall style={FacultyIcon}/>{professor.mobileNumber}</p> : null }
              </Col>
            </Row>
          </Container>
        </Col>
        )
      }))}
      </Row>
      
      
    </Container>
    </div>
  );
}
export default Faculty;




