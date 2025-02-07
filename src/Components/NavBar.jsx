import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import nykaLogo from "../assets/nykaLogo.png";
import { useState } from "react";
import { useUser } from "../UserContext/UserContext";

function NavBar() {
 // const {product,fetchProduct} = useUser();
        // const { product, fetchProducts } = useUser();
  
  
const [SelectedBrand ,setSelectedBrand] = useState([""])

// const filterBrands = SelectedBrand ? product.filter((e)=>e.brand===SelectedBrand):product;



  return (
    <Navbar fluid ='true' expand="lg" className="bg-dark navbar-dark" fixed="top"> 
      <Container >
        <Navbar.Brand >
          <img
            src={nykaLogo}
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="nykaa"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/nykaCard">New Arrivals</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Hair</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Face</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button> 
          </Form>
          <Nav className=" my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/cart">
                <Button variant="outline-light">Cart</Button>
            </Nav.Link>
            <Nav.Link href="#action1">
                <Button variant="outline-light">Wish List</Button>
            </Nav.Link>
            <Nav.Link href="/signup">
                <Button variant="outline-light"  >sign in</Button></Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
