import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'

function Navigation(){
    return(
        <div>
        <Navbar variant="dark" sticky='top' id='navBar'>
            <Container>
                <Navbar.Brand href='/'> <img src="" alt='not found'></img></Navbar.Brand>
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                    <Nav.Link href='/'> Profile </Nav.Link>
                    <Nav.Link href='/directory'> Directory </Nav.Link>
                    <Nav.Link href='/cabshare'> Cabs  </Nav.Link>
                    <Nav.Link href='/about'> About </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigation