import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ title, description, image, onAddToCart, onFavorite }) => {
  return (
    <Card
      style={{
        width: "18rem",
        background: "linear-gradient(to bottom, #ffb6c1, #ff69b4)",
        borderRadius: "15px",
        textAlign: "center",
        padding: "10px",
      }}
      className="shadow-lg"
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ borderRadius: "15px", height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", color: "#fff" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ color: "#fff" }}>{description}</Card.Text>
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="light" className="me-2" onClick={onAddToCart}>
            Add to Cart
          </Button>
          <FaHeart
            size={24}
            color="white"
            className="heart-icon"
            style={{ cursor: "pointer", transition: "color 0.3s ease-in-out" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            onClick={onFavorite}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
