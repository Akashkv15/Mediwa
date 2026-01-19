import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
function Navbarsection() {
  const navigate=useNavigate()
  const nav=()=>{
    navigate('/Loginpage')
  }
  return (
   <>
    <Navbar expand="lg" className="nav1">
      <Container>
        <Navbar.Brand href="#home"><h1 id='h1'>Mediwa</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home"><h5 id='homenav'>Login</h5></Nav.Link> */}
            <button onClick={nav} style={{fontFamily:'Audiowide',border:'none',color:'white',backgroundColor:'black',
              borderRadius:'5px',padding:'5px'
            }}>Login out</button>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
   </>
  )
}

export default Navbarsection