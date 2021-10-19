import React from 'react';
import './Header.css'
import { Button, Container, Form, FormControl, Nav, Navbar,} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
 
        <div className="mainheader-container">
            <Navbar expand="lg">
            <Container>
         <NavbarCollapse id="navbarScroll">
         <Nav mr-5
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
         <NavLink className="navber" to="/home">Home</NavLink>
        <NavLink className="navber" to="/courses">Collection</NavLink>
        <NavLink className="navber" to="/profile">Profile</NavLink>
        <NavLink className="navber" to="/About">About</NavLink>
        {
  user?.email && <button  onClick={logOut} className='btn btn-primary'>Log Out</button>
}
      </Nav>
      <div className="company-name">
        <h2>Natural Care</h2>
      </div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </NavbarCollapse>
  </Container>
</Navbar>


        </div>
    );
};

export default Header;