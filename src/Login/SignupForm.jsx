import React, { useDebugValue, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Country, State, City } from "country-state-city";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import nykaFormLogo from "../assets/nykaa-removebg-preview.png";
import { login, signup } from "../features/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Input } from "@headlessui/react";

function SignupForm() {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [userType, setUserType] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      name,
      number,
      userType,
      address1,
      address2,
      selectedCountry,
      selectedState,
      selectedCity,
    };

    if (isLogin) {
      dispatch(login({ user: userData, userType }));
      navigate("/");
    } else {
      dispatch(signup({ user: userData, userType }));
      navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Navbar bg="dark" variant="dark" className="w-100 mb-4">
        <Container>
          <Navbar.Brand></Navbar.Brand>
        </Container>
      </Navbar>

      <div
        style={{
          width: "50%",
          maxWidth: "600px",
          backgroundColor: "pink",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <img
              alt="Company Logo"
              src={nykaFormLogo}
              style={{ width: "300px", height: "auto" }}
            />
          </div>
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="Number"
                placeholder=" Enter Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select
              value={selectedCountry?.isoCode || ""}
              onChange={(e) => {
                const country = Country.getAllCountries().find(
                  (c) => c.isoCode === e.target.value
                );
                setSelectedCountry(country);
                setSelectedState(null);
                setSelectedCity(null);
              }}
              required
            >
              <option value="">Select Country</option>
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              value={selectedState?.isoCode || ""}
              onChange={(e) => {
                const state = State.getStatesOfCountry(
                  selectedCountry?.isoCode || ""
                ).find((s) => s.isoCode === e.target.value);
                setSelectedState(state);
                setSelectedCity(null);
              }}
              required
              disabled={!selectedCountry}
            >
              <option value="">Select State</option>
              {selectedCountry &&
                State.getStatesOfCountry(selectedCountry.isoCode).map(
                  (state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  )
                )}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select
              value={selectedCity?.name || ""}
              onChange={(e) => {
                const city = City.getCitiesOfState(
                  selectedCountry?.isoCode || "",
                  selectedState?.isoCode || ""
                ).find((c) => c.name === e.target.value);
                setSelectedCity(city);
                required;
              }}
              disabled={!selectedState}
            >
              <option value="">Select City</option>
              {selectedState &&
                City.getCitiesOfState(
                  selectedCountry?.isoCode || "",
                  selectedState?.isoCode || ""
                ).map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Choose your profile{" "}
            </label>
            <Input class="form-control" type="file" id="formFile" />
          </div>
          <Form.Group controlId="userType" className="mb-3">
            <Form.Label>Select User Type</Form.Label>
            <Form.Select
              value={userType || ""}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Submit
          </Button>
          <Button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: "none",
              border: "none",
              color: "blue",
              cursor: "pointer",
            }}
          />
          <p>
            if you have already account please <a href="/login"> Login</a>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default SignupForm;
