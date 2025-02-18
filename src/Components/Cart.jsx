import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  updateQuantity,
  fetchProducts,
} from "../features/CartSlice";
import {
  Button,
  ListGroup,
  Container,
  Image,
  Spinner,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router";

function Cart() {
  const { cartItems, status, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClose = () => {
    setShowModal(false);
    dispatch(clearCart());
    navigate("/");
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleBuyNow = () => {
    setShowModal(true);
  };
  return (
    <Container style={{ marginTop: "150px" }}>
      <h2>Shopping Cart</h2>

      {status === "loading" && <Spinner animation="border" />}
      {status === "failed" && <p className="text-danger">Error: {error}</p>}

      {cartItems.length === 0 && status !== "loading" ? (
        <p>Your cart is empty. Please <a href="/"> go and shop</a></p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <Image
                  src={item.image_link}
                  alt={item.name}
                  style={{ width: "80px", height: "80px" }}
                />
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: $ {item.price}</p>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: -1 }))
                      }
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: 1 }))
                      }
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4 className="mt-3">Total Price: $ {totalPrice}</h4>

          <div className="mt-3">
            <Button variant="warning" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>

            <Button variant="success" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>
        </>
      )}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for shopping with us! 😊</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Cart;
