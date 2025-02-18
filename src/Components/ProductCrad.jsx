import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const ProductCard = ({
  title,
  description,
  image,
  onAddToCart,
  onFavorite,
  price,
  price_sign,
  discount,
  shades,
}) => {
  const [showMoreShades, setShowMoreShades] = useState(false);

  return (
    <Card
      style={{
        width: "18rem",
        background: "linear-gradient(to bottom, #ffb6c1, #ff69b4)",
        borderRadius: "15px",
        textAlign: "center",
        padding: "10px",
        marginTop: "150px",
        position: "relative",
      }}
      className="shadow-lg"
    >
      <div style={{ position: "relative" }}>
        {!showMoreShades ? (
          <Card.Img
            variant="top"
            src={image}
            style={{
              borderRadius: "15px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            <p>Available Shades</p>
            <div className="d-flex flex-wrap justify-content-center">
              {shades.map((shade, index) => (
                <div
                  key={index}
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: shade,
                    margin: "5px",
                  }}
                ></div>
              ))}
            </div>
            <Button
              variant="light"
              size="sm"
              onClick={() => setShowMoreShades(false)}
            >
              Close
            </Button>
          </div>
        )}
        {!showMoreShades  > 4 && (
          <Button
            variant="dark"
            size="sm"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "15px",
              padding: "5px 10px",
            }}
            onClick={() => setShowMoreShades(true)}
          >
            More
          </Button>
        )}
      </div>

      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", color: "#fff" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ color: "#fff" }}>{description}</Card.Text>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <Card.Text style={{ color: "#fff", fontWeight: "bold" }}>
            {price_sign} {price}
          </Card.Text>
          {discount && (
            <span
              style={{
                background: "red",
                color: "#fff",
                padding: "2px 8px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {discount}% OFF
            </span>
          )}
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <Button variant="light" className="me-2" onClick={onAddToCart}>
            Add to Cart
          </Button>
          <FaHeart
            size={24}
            color="white"
            className="heart-icon me-2"
            style={{
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            onClick={onFavorite}
          />
          <FaShareAlt
            size={24}
            color="white"
            style={{
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

