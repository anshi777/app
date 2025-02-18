import React, { useEffect, useState } from "react";
import { Card, Container, Image, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/ProductSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { FaHeart, FaCartPlus } from "react-icons/fa";

const FilteredProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const uniqueProducts = [];
  const seenTypes = new Set();

  products.forEach((item) => {
    if (!seenTypes.has(item.product_type)) {
      seenTypes.add(item.product_type);
      uniqueProducts.push(item);
    }
  });

  const filteredProducts = selectedType
    ? products.filter((item) => item.product_type === selectedType)
    : products; 

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const handleAddToWishlist = (product) => {
    console.log("Added to wishlist:", product);
  };

  return (
    <>
      <div className="my-5">
        <p></p>
      </div>

      <Container className="text-center my-5">
        <h2 className="fw-bold text-danger">Brands</h2>

        <div className="my-5"></div>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {uniqueProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => setSelectedType(item.product_type)}
                style={{ cursor: "pointer" }}
              >
                <Card
                  className="d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "pink", 
                    border: "none",
                    borderRadius: "50%",
                  }}
                >
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Image
                      src={item.image_link}
                      alt={item.product_type}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </Card.Body>
                </Card>
                <Card.Subtitle className="mt-2 text-dark fw-bold">
                  {item.product_type}
                </Card.Subtitle>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-5">
          <h3 className="fw-bold text-primary">{selectedType ? `${selectedType} ` : 'All Products'}</h3>
          <Row className="mt-4">
            {filteredProducts.map((item, index) => (
              <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                <Card style={{ backgroundColor: "pink" }}>
                  <Image
                    src={item.image_link}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Title className="text-muted">{item.brand}</Card.Title>
                    <Card.Text className="text-muted">{item.product_type}</Card.Text>
                    <Card.Text className="fw-bold text">
                      ${item.price} 
                    </Card.Text>

                    <div className="d-flex justify-content-between">
                      <Button
                        variant="outline-success"
                        onClick={() => handleAddToCart(item)}
                      >
                        <FaCartPlus /> Add to Cart
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleAddToWishlist(item)}
                      >
                        <FaHeart /> 
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default FilteredProduct;
