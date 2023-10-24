
import { Container, Row, Col } from 'react-grid-system';
import User from '../../../src/assets/user.png'
import {IoIosMail,IoIosCall} from 'react-icons/io'
import background from '../../../src/assets/faculty_people.png'
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
    marginTop: '10%'
  }
  const FacultyIcon= {
    fontSize : "1.5rem",
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
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={HODName}>Name of Professor</h1>
                  <h2 style={HODDesignation}>Head of Department</h2> 
                  <p>Specialization</p>
                  <h3 style={HODStatement}>A statement on Department of Computer Engineering</h3>
                  <IoIosMail style={HODIcon}/>
                  <IoIosCall style={HODIcon}/>
              </Col>
            </Row>
      </Container>


      <Row>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={6} style={{padding : '2% 0%'}}>
          <Container style={Faculty}>
            <Row>
              <Col lg={3} style={FacultyImage}>
               <img src={User}></img>
              </Col>
              <Col lg={9}>
                  <h1 style={FacultyName}>Name of Professor</h1>
                  <h2 style={FacultyDesignation}>(Designation)</h2>
                  <p>Specialization</p>
                  <IoIosMail style={FacultyIcon}/>
                  <IoIosCall style={FacultyIcon}/>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
export default Faculty;




