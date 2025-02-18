import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Image,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Popover,
  Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/ProductSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { addToCart } from "../features/CartSlice";

const FilteredProduct = () => {
  const dispatch = useDispatch();
  const { products ,searchTerm} = useSelector((state) => state.product);
  const [showPopover, setShowPopover] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const selectedBrand = queryParams.get("brand");
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const uniqueProducts = [];
  const seenTypes = new Set();

  products.forEach((item) => {
    if (!seenTypes.has(item.product_type)) {
      seenTypes.add(item.product_type);
      uniqueProducts.push({
        product_type: item.product_type,
        image_link: item.image_link
      });
    }
  });

  const filteredProducts = selectedBrand
    ? products.filter((item) => item.brand === selectedBrand  || 
      item.brand === selectedBrand ||
      item.product_type === selectedBrand ||
      item.name === selectedBrand
  )
    : products;

  return (
    <><Navbar bg="dark" variant="dark" className="w-100 mb-4">
      <Container>
        <Navbar.Brand></Navbar.Brand>
      </Container>
    </Navbar>
    <Container className="text-center my-5">
        <h2 className="fw-bold text-danger">Categories</h2>

        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper mt-4"
        >
          {uniqueProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => selectedBrand(item.product_type)}
                style={{ cursor: "pointer" }}
              >
                <Card
                  className="d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "lightpink",
                    border: "none",
                    borderRadius: "50%",
                  }}
                >
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Image
                      src={item.image_link}
                      alt={item.product_type}
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }} />
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
          <h3 className="fw-bold text-primary">
            {selectedBrand ? `${selectedBrand} ` : "All Products"}
          </h3>
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
                    }} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Title className="text-muted">{item.brand}</Card.Title>
                    <Card.Text className="fw-bold text">${item.price}</Card.Text>

                    {/* Display Available Colors */}
                    <div className="d-flex align-items-center mt-2">
                      {item.product_colors
                        ?.slice(0, 3)
                        .map((color, colorIndex) => (
                          <OverlayTrigger
                            key={colorIndex}
                            placement="top"
                            overlay={<Tooltip>{color.colour_name}</Tooltip>}
                          >
                            <span
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor: color.hex_value,
                                display: "inline-block",
                                marginRight: "5px",
                                border: "1px solid #000",
                                cursor: "pointer",
                              }}
                            ></span>
                          </OverlayTrigger>
                        ))}

                      {item.product_colors.length > 3 && (
                        <OverlayTrigger
                          trigger="click"
                          placement="top"
                          show={showPopover === index}
                          onToggle={() => setShowPopover(showPopover === index ? null : index)}
                          overlay={<Popover>
                            <Popover.Body
                              className="d-flex"
                              style={{
                                maxHeight: "200px",
                                overflowY: "auto",
                              }}
                            >
                              {item.product_colors
                                .slice(3)
                                .map((color, colorIndex) => (
                                  <OverlayTrigger
                                    key={colorIndex}
                                    placement="top"
                                    overlay={<Tooltip>{color.colour_name}</Tooltip>}
                                  >
                                    <span
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: color.hex_value,
                                        display: "inline-block",
                                        marginRight: "5px",
                                        border: "1px solid #000",
                                        cursor: "pointer",
                                      }}
                                    ></span>
                                  </OverlayTrigger>
                                ))}
                            </Popover.Body>
                          </Popover>}
                        >
                          <Button
                            variant=""
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowPopover(
                                showPopover === index ? null : index
                              );
                            } }
                          >
                            + More
                          </Button>
                        </OverlayTrigger>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                      <Button variant="outline-success" onClick={() => dispatch(addToCart(products))}>
                        <FaCartPlus /> Add to Cart
                      </Button>
                      <Button variant="outline-danger">
                        <FaHeart />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container></>
  );
};

export default FilteredProduct;
