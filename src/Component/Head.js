import React from 'react'
import { Container,Navbar,Nav,NavDropdown } from 'react-bootstrap'
import { Link,Outlet } from 'react-router-dom'
import './Head.css'

const Head = () => {
  return (
    <>
    <Container>
    <Navbar bg="white"  variant='light' expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="#home"><span className='rb' > RB</span><span className='news'>News</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"  activeKey="/">
      <Nav activeKey="/">
        <Nav.Link as={Link} to="/"  className='topic'>Home</Nav.Link>
        <Nav.Link as={Link} to="/business" className='topic'>Business</Nav.Link>
        <Nav.Link as={Link} to="/entertainment" className='topic'>Entertainment</Nav.Link>
        <Nav.Link as={Link} to="/sport" className='topic'>Sports</Nav.Link>
        <Nav.Link as={Link} to="/technology" className='topic'>Technology</Nav.Link>
        <Nav.Link as={Link} to="/health" className='topic'>Health</Nav.Link>
        <Nav.Link as={Link} to="/science"className='topic'>Science</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </Container>
    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default Head