import React, { useEffect } from 'react'
import nykaProduct from '../assets/nykaProduct.png'
import { FaHeart } from 'react-icons/fa';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useUser } from '../UserContext/UserContext';

const ShowProduct = () => {
      const { product, fetchProducts } = useUser();
    

      useEffect(() => {
        fetchProducts();
      }, [fetchProducts]);
  return (
    <>
   
   {/* <Container className="text-center my-5">
  <h2 className="fw-bold text-pink-400">Brand List</h2>
  <Row className="justify-content-center mt-10 g-10">
    {product.map((item, index) => (
      <Col key={index} xs={4} sm={2} className="d-flex justify-content-center">
        <a href={`#`} 
        // onClick={() => handleImageClick(item)} 
        className="text-decoration-none">
          <Card
            className="rounded-circle bg-pink-400 text-white d-flex align-items-center justify-content-center"
            style={{ width: "120px", height: "120px", overflow: "hidden" }}
          >
            <Card.Body className="d-flex align-items-center justify-content-center p-0">
              <img
                src={item.image_link}
                alt="Product"
                
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "80%" ,  backgroundColor: "pink"}}
              />
            </Card.Body>
          </Card>
        </a>
      </Col>
    ))}
  </Row>
</Container> */}


      <div className="container mt-5">
              <h2 className="text-center mb-4">More things that you can buy</h2>
              <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-4 col-sm-6 mx-3">
                      <div className="card text-center border-5px shadow-lg">
                          <div className="pink-bg p-3 rounded-top">
                              <img src={nykaProduct} className="card-img-top" alt="Product Image" />
                          </div>
                          <div className="card-body p-2">
                              <h5 className="card-title">nameee</h5>
                              <div className="d-flex justify-content-between">
                                  <p className="text-dark fw-bold"> Price :  ₹ 1999</p>
                                  <p className="text-muted"> MRP :
                                      <del>     ₹ 2499</del>
                                  </p>
                              </div>
                              <p className="text-success fw-bold"> You Save : ₹ 500 (20%)</p>
                              <div className="d-flex justify-content-between">
                                  <button className="btn btn-primary btn-sm w-50">Buy Now</button>
                                  <FaHeart
                                      size={40}
                                      color="pink"
                                      className="heart-icon"
                                      style={{ cursor: "click", transition: "color 0.3s ease-in-out" }}
                                      onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
                                      onMouseLeave={(e) => (e.currentTarget.style.color = "dark")} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
  );
};

export default ShowProduct;
