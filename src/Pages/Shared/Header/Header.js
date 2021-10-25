import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Genius</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>

                        <Link to="/addService">Add Service</Link>

                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                            {/* Signed in as: <a href="#login">{user?.displayName.split(" ")[0]}</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;