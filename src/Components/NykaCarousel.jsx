import Carousel from "react-bootstrap/Carousel";
import C1 from "./C1.png";
import C2 from "./C2.png";
import C3 from "./C3.png";

function NykaCarousel() {
  return (
    <Carousel fluid data-bs-theme="dark" style={{ marginTop: "8%" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={C1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={C2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={C3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NykaCarousel;
