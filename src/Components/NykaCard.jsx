import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCrad";
import { Container, Navbar, Spinner } from "react-bootstrap";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/ProductSlice";

const NykaCard = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);
    const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Navbar bg="dark" variant="dark" className="w-100 mb-4">
      <Container>
        <Navbar.Brand></Navbar.Brand>
      </Container>
    </Navbar>
      <div
        className="d-flex justify-content-center"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.length > 0 ? (
          products.map((products) => (
            <ProductCard
              key={products.id}
              title={products.name}
              price={products.price } 
              description={products.brand}
              image={products.image_link}
              price_sign={products.price_sign}
              onAddToCart={() => alert(`${products.name} added to cart!`)}
              onFavorite={() => alert(`${products.name} added to favorites!`)}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="grow" size="sm" className="mx-2" />
            <Spinner animation="grow" size="xs" className="mx-2" />
            <Spinner animation="grow" className="mx-2" />
          </div>
        )}
      </div>
    </>
  );
};

export default NykaCard;
