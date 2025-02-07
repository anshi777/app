import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCrad";
import { Spinner } from "react-bootstrap";
import Cart from "./Cart";
import { useUser } from "../UserContext/UserContext";

const NykaCard = () => {
  const { product, fetchProducts } = useUser();
  const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };
// console.log(addToCart)
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {product.length > 0 ? (
          product.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.brand}
              image={product.image_link}
              onAddToCart={() => alert(`${product.name} added to cart!`)}
              onFavorite={() => alert(`${product.name} added to favorites!`)}
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
      <Cart cart={cart} setCart={setCart} />
    </>
  );
};

export default NykaCard;
