import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Country, State, City } from "country-state-city";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import nykaFormLogo from "../assets/nykaa-removebg-preview.png";
function SignupForm() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

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
        <Form>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="Number"
                placeholder=" Enter Phone Number"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
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

          <Form.Group className="mb-3">
            <Form.Label>Select an UserType</Form.Label>
            <Form.Check
              type="checkbox"
              label="Customer"
              checked={selectedCheckbox === "option1"}
              onChange={() => setSelectedCheckbox("option1")}
            />
            <Form.Check
              type="checkbox"
              label="Seller"
              checked={selectedCheckbox === "option2"}
              onChange={() => setSelectedCheckbox("option2")}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Submit
          </Button>
          <p>
            if you have already account please <a href="/login"> Login</a>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default SignupForm;
