import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/WishListSlice";


const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const handleRemoveFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
  };

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <div className="container mt-6">
        <h2 className="text-center mb-4">Your Wishlist</h2>
        {wishlist.length > 0 ? (
          <div className="row justify-content-center">
            {wishlist.map((product) => {
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
                      <div className="d-flex justify-content-center my-3 gap-5">
                        <Button>+</Button>
                        <Button>-</Button>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Button
                          onClick={() => handleRemoveFromWishlist(product)}
                        >
                          add to
                        </Button>

                        <FaHeart
                          size={40}
                          color="red"
                          className="heart-icon"
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center">
            Your wishlist is empty! please add Something{" "}
            <a href="/">Go home page </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
