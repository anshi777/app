import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Country, State, City } from "country-state-city";

function SignupForm() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  return (
    <Form className="alignment-center">
      <Row className="mb-10 mt-10">
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
            placeholder="Password"
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
            setSelectedState(null); // Reset state
            setSelectedCity(null); // Reset city
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
            const state = State.getStatesOfCountry(selectedCountry?.isoCode || "").find(
              (s) => s.isoCode === e.target.value
            );
            setSelectedState(state);
            setSelectedCity(null); 
          }}
          disabled={!selectedCountry}
        >
          <option value="">Select State</option>
          {selectedCountry &&
            State.getStatesOfCountry(selectedCountry.isoCode).map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
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
            City.getCitiesOfState(selectedCountry?.isoCode || "", selectedState?.isoCode || "").map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignupForm;
