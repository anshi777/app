import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { logout } from "../features/AuthSlice";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import nykaLogo from "../assets/nykaLogo.png";
import { handleSearch } from "../features/ProductSlice";
import _ from "lodash";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const cartItem = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishlist);
  const wishListCount = wishList?.count || 0;
  const cartCount = cartItem?.count || 0;
  const [query, setQuery] = useState("");

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];
  const handleBrandClick = (brand) => {
    navigate(`/filteredBrandProduct?brand=${encodeURIComponent(brand)}`);
  };

  const debouncedSearch = useCallback(
    _.debounce((searchTerm) => {
      dispatch(handleSearch(searchTerm));
    }, 500),
    [dispatch]
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={nykaLogo} width="200" height="100" alt="nykaa" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/nykaCard">
              New Arrivals
            </Nav.Link>
            {user?.userType === "seller" && (
              <Nav.Link as={Link} to="/seller">
                Seller
              </Nav.Link>
            )}
            {user?.userType === "admin" && (
              <>
                <Nav.Link as={Link} to="/admin">
                  Admin
                </Nav.Link>
                <Nav.Link as={Link} to="/adminDashboard">
                  AdminDashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/seller">
                  Seller
                </Nav.Link>
              </>
            )}
            <NavDropdown title="Categories">
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  backgroundColor: "pink",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  maxHeight: "70vh",
                  overflowY: "auto",
                }}
              >
                {uniqueBrands.map((brand, index) => (
                  <>
                    <NavDropdown.Item
                      // href="/filteredproduct"
                      key={index}
                      onClick={() => handleBrandClick(brand)}
                    >
                      {brand}
                    </NavDropdown.Item>
                  </>
                ))}
              </div>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={query}
              onChange={(e)=> e.target.value.length > 0 ? handleInputChange(e) : dispatch(handleSearch(""))}
            />
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <BsCart4 size={30} variant="outline-light" />

              <span class=" top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/wishList">
              <FaHeartCirclePlus size={30} variant="outline-light" />
              <span class=" top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {wishListCount}
              </span>
            </Nav.Link>
            {isAuthenticated ? (
              <>
                {/* <Nav.Link href="/wishList">
                  <FaHeartCirclePlus size={30} variant="outline-light" onClick={() => navigate("/wishList")}/>
                    <span class=" top-0 start-50 translate-middle badge rounded-pill bg-danger">
                      {wishListCount}
                      
                    </span>
                  </Nav.Link> */}
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="link"
                    id="profile-dropdown"
                    className="p-2px border-1px"
                  >
                    <img
                      src="https://i.pinimg.com/736x/0a/ce/02/0ace02d0f19c205612baace33a586fdb.jpg"
                      alt="User Avatar"
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Header>{user?.name || "User"}</Dropdown.Header>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>

                    <Dropdown.Item>
                      {user?.userType || "Customer"}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      <IoPersonRemoveSharp />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                {/* <Nav.Link href="/login">
                  <FaHeartCirclePlus size={30} variant="outline-light" />

                  <span class=" top-0 start-50 translate-middle badge rounded-pill bg-danger">
                  {wishListCount}
                  </span>
                </Nav.Link> */}
                <Nav.Link as={Link} to="/signup">
                  <IoPersonAdd size={30} variant="outline-light" />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
