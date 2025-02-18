import React from "react";
import { Card, Button } from "react-bootstrap";

const productsCard2 = ({ products }) => {
    
  return (
    <Card className="shadow-lg p-3 mb-4" style={{ backgroundColor: "#ffccd5", borderRadius: "15px" }}>
      <div className="text-center">
        <Card.Img
          variant="top"
          src={products.image_link}
        //   alt={products.name}
          style={{ width: "100px", height: "100px", objectFit: "contain", marginTop: "10px" }}
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center text-dark fw-bold">{products.name}</Card.Title>
        <Card.Text className="text-center text-muted">{products.description}</Card.Text>
        
        <div className="text-center">
          <span className="fw-bold text-dark">Category:</span> <span className="text-muted">{products.category}</span>
        </div>
        
        <div className="d-flex justify-content-center gap-2 mt-2">
          <span className="fw-bold text-dark">{products.price_sign}</span>
          <span className="fw-bold text-dark">{products.price}</span>
        </div>

        {/* Color options */}
        <div className="d-flex justify-content-center mt-3">
          {products.colors?.map((color, index) => (
            <span
              key={index}
              className="rounded-circle mx-1"
              style={{ backgroundColor: color, width: "15px", height: "15px", display: "inline-block" }}
            ></span>
          ))}
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-3">
          <Button variant="dark" size="sm">Buy Now</Button>
          <Button variant="outline-danger" size="sm">❤️</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default productsCard2;
