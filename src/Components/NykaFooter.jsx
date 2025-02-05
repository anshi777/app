import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NykaFooter = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "40px 0", marginTop: "20px" }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col xs={12} md={3} className="mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Careers</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Terms & Conditions</a></li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h5 className="mb-3">Customer Care</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Help Center</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Track Order</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Return & Refunds</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a></li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" style={{ color: "#fff", marginRight: "15px", fontSize: "20px" }}><FaFacebookF /></a>
              <a href="#" style={{ color: "#fff", marginRight: "15px", fontSize: "20px" }}><FaInstagram /></a>
              <a href="#" style={{ color: "#fff", marginRight: "15px", fontSize: "20px" }}><FaTwitter /></a>
              <a href="#" style={{ color: "#fff", fontSize: "20px" }}><FaYoutube /></a>
            </div>
          </Col>

          {/* Copyright */}
          <Col xs={12} md={3} className="text-center text-md-end">
            <h5 className="mb-3">© 2025 Nykaa</h5>
            <p style={{ fontSize: "14px" }}>All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default NykaFooter;
