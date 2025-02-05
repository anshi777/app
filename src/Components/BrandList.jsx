import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const brands = [
  { name: "Cetaphil", bgColor: "#fff", textColor: "#000" },
  { name: "Kay Beauty", bgColor: "#fff", textColor: "#000" },
  { name: "CLINIQUE", bgColor: "#fff", textColor: "#000" },
  { name: "Neutrogena", bgColor: "#fff", textColor: "#000" },
  { name: "ESTÉE LAUDER", bgColor: "#fff", textColor: "#000" },
];

const BrandList = () => {
  return (
    <Container fluid className="text-center py-4" style={{ backgroundColor: "#ffc0cb" }}>
      <Row className="justify-content-center">
        {brands.map((brand, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-3 d-flex justify-content-center">
            <Button
              style={{
                backgroundColor: brand.bgColor,
                color: brand.textColor,
                borderRadius: "25px",
                padding: "10px 20px",
                fontWeight: "bold",
                border: "2px solid pink",
                width: "100%",
                maxWidth: "200px",
              }}
            >
              {brand.name}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandList;
