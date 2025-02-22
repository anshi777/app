import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/ProductSlice";
import { Button, Spinner } from "react-bootstrap";
import { addToCart } from "../features/CartSlice";
import { addToWishlist } from "../features/WishListSlice";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const { products, loading, error,searchTerm } = useSelector((state) => state.product);
  const { wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  const filteredProducts = products.filter((product) => {
    const productName = product.name ? product.name.toLowerCase() : "";
    const productBrand = product.brand ? product.brand.toLowerCase() : "";
    const searchQuery = searchTerm.toLowerCase();
  
    return productName.includes(searchQuery) || productBrand.includes(searchQuery);
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">More things that you can buy</h2>
        {products.length > 0 ? (
          <div className="row justify-content-center">
            {filteredProducts.map((product) => {
              const discountPercentage = Math.floor(Math.random() * 41) + 10;
              const originalPrice = parseFloat(product.price);
              const discountAmount = (originalPrice * discountPercentage) / 100;
              const discountedPrice = (originalPrice - discountAmount).toFixed(
                2
              );

              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mx-3"
                  key={product.id}
                >
                  <div className="card text-center border-5px shadow-lg">
                    <div className="pink-bg p-3 rounded-top">
                      <img
                        src={product.image_link}
                        className="card-img-top"
                        alt="Product"
                      />
                    </div>
                    <div className="card-body p-2">
                      <h5 className="card-title">{product.name}</h5>
                      <h6 className="card-description">{product.brand}</h6>
                      <div className="d-flex justify-content-between">
                        <p className="text-dark fw-bold">
                          {product.price_sign} {discountedPrice}
                        </p>
                        <p className="text-muted">
                          MRP:{" "}
                          <del>
                            {product.price_sign} {originalPrice}
                          </del>
                        </p>
                      </div>
                      <p className="text-success fw-bold">
                        You Save: {product.price_sign}{" "}
                        {discountAmount.toFixed(2)} ({discountPercentage}%)
                      </p>
                      <div className="d-flex justify-content-between">
                        <Button onClick={() => dispatch(addToCart(product))}>
                          Add to Cart
                        </Button>

                        <FaHeart
                          size={40}
                          color={
                            wishlist.some((item) => item.id === product.id)
                              ? "red"
                              : "pink"
                          }
                          className="heart-icon"
                          style={{
                            cursor: "pointer",
                            transition: "color 0.3s ease-in-out",
                          }}
                          onClick={() => handleAddToWishlist(product)} 
                          // onClick={() => dispatch(addToWishlist(product))}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "red")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "pink")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

export default ShowProduct;
