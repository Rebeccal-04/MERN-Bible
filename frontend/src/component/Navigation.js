import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <Navbar bg="body" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="Home">Jesus Loves You</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="History">History</Nav.Link>
			<Nav.Link href="OldTestament">OldTestament</Nav.Link>
			<Nav.Link href="NewTestament">NewTestament</Nav.Link>
			<Nav.Link href="Quiz">Quiz</Nav.Link>
			<Nav.Link href="Feedback">Feedback</Nav.Link> 
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;