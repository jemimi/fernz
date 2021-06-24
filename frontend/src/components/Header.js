import React from 'react'
import { Link } from 'react-router-bootstrap'
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
         <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>  
                <Navbar.Brand as={Link} to='/'>Fernz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto"> {/*margin left adds space and moves the nav to right */}
                    <Nav.Link as={Link} to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                    </Nav.Link> {/*font awesome icon */}
                    <Nav.Link as={Link} to='/login'>
                        <i className='fas fa-user'></i>
                       Sign In
                    </Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
};

export default Header

