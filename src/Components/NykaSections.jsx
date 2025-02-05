import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NykaProduct2 from "./NykaProduct2.png"; 

const sections = [
  { title: "The Gift Store", img: NykaProduct2 },
     { title: "Nykaa Wali Shaadi", img: NykaProduct2 },
   { title: "New at Nykaa", img: NykaProduct2 },
];

const NykaaSections = () => {
  return (
    <Container fluid className="py-4 text-center  " style={{ backgroundColor: "#ffe4e1" }}>
      <h2 style={{ color: "#d63384", fontWeight: "bold", }}>Curated with <span style={{ color: "red" }}>Love</span></h2>
      <Row className="justify-content-center">
        {sections.map((section, index) => (
          <Col
            key={index}
            xs={12}
            md={4}
            className="mb-3 d-flex justify-content-center"
            style={{
              transform: index % 2 === 0 ? "translateY(40px)" : "translateY(-10px)",
            }}
          >
            <Card
              className="custom-card shadow-lg"
              style={{
                width: "250px",
                background: "linear-gradient(to bottom, #ffb6c1, #ff69b4)",
                borderRadius: "50px", 
                padding: "15px",
                textAlign: "center",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Card.Img
                variant="top"
                src={section.img}
                style={{
                  borderRadius: "40px",
                  height: "100px",
                  objectFit: "cover",
                  border: "2px solid white",
                }}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", color: "#fff" }}>
                  {section.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NykaaSections;
