import React, { useState } from "react";


// const Cart = ({ cart, setCart }) => {
const Cart = () => {

const [cart,setCart] = useState([])
    
    const increaseQuantity = (id) => {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    };
  
    const decreaseQuantity = (id) => {
      setCart(cart.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } 
          : item
      ));
    };
  
    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };
  
    return (
      <div className="container mt-4">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-sm btn-secondary me-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                    {item.quantity}
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => increaseQuantity(item.id)}>+</button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm" >Buy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
  export default Cart;
  