import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import NykaProduct from "./NykaProduct.png"; 
import ProductCard from "./ProductCrad";

const NykaCard = () => {
    const products = [
        { title: "Nykaa Beauty", description: "Makeup & Skincare", image: NykaProduct },
        { title: "Lakme Essentials", description: "Long-lasting beauty", image: NykaProduct },
        { title: "Maybelline New York", description: "Trendy shades", image: NykaProduct },
        { title: "L'Oreal Paris", description: "Luxurious cosmetics", image: NykaProduct },
      ];

  return (
    <>
    {/* <Card
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
              src={NykaProduct}
              style={{ borderRadius: "15px", height: "200px", objectFit: "cover" }} />
          <Card.Body>
              <Card.Title style={{ fontWeight: "bold", color: "#fff" }}>
                  Nykaa Beauty
              </Card.Title>
              <Card.Text style={{ color: "#fff" }}>
                  Discover the latest Nykaa products, including skincare, makeup, and beauty essentials.
              </Card.Text>
              <div className="d-flex justify-content-center align-items-center">
                  <Button variant="light" className="me-2">
                      Add to Cart
                  </Button>
                  <FaHeart
                      size={24}
                      color="white"
                      className="heart-icon"
                      style={{ cursor: "pointer", transition: "color 0.3s ease-in-out" }}
                      onMouseEnter={(e) => (e.target.style.color = "red")}
                      onMouseLeave={(e) => (e.target.style.color = "white")} />
              </div>
          </Card.Body> */}
      {/* </Card> */}
       <div
      className="d-flex justify-content-center"
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap", 
      }}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          image={product.image}
          onAddToCart={() => alert(`${product.title} added to cart!`)}
          onFavorite={() => alert(`${product.title} added to favorites!`)}
        />
      ))}
    </div>
          </>
  );
};

export default NykaCard;
