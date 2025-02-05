import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialMedia = [
  { icon: <FaFacebookF />, link: "#", name: "Facebook" },
  { icon: <FaInstagram />, link: "#", name: "Instagram" },
  { icon: <FaTwitter />, link: "#", name: "Twitter" },
  { icon: <FaYoutube />, link: "#", name: "YouTube" },
];

const FollowUs = () => {
  return (
    <Container className="text-center my-5">
      <h2 style={{ fontWeight: "bold ", color: "#ff1493" }}>Follow Us</h2>
      <Row className="justify-content-center mt-3">
        {socialMedia.map((item, index) => (
          <Col key={index} xs={3} className="mb-2 px-2">
            <a href={item.link} className="text-decoration-none">
              <Card className="social-card">
                <Card.Body className="d-flex justify-content-center align-items-center">
                  <span className="icon">{item.icon}</span>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .social-card {
          background-color: #ff69b4;
          border-radius: 100%;
          padding: 5px;
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s, background-color 0.1s;
        }
        .social-card:hover {
          transform: scale(1.1);
          background-color: #ff1493;
        }
        .icon {
          font-size: 200px;
          color: white;
        }
      `}</style>
    </Container>
  );
};

export default FollowUs;


// import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// const socialMedia = [
//   { icon: <FaFacebookF />, link: "#", name: "Facebook" },
//   { icon: <FaInstagram />, link: "#", name: "Instagram" },
//   { icon: <FaTwitter />, link: "#", name: "Twitter" },
//   { icon: <FaYoutube />, link: "#", name: "YouTube" },
// ];

// const FollowUs = () => {
//   return (
//     <Container className="text-center my-5">
//       <h2 className="fw-bold text-danger">Follow Us</h2>
//       <Row className="justify-content-center mt-3 g-10">
//         {socialMedia.map((item, index) => (
//           <Col key={index} xs={6} sm={3} className="d-flex justify-content-center">
//             <a href={item.link} className="text-decoration-none">
//               <Card className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{ width: "500px", height: "500px" }}>
//                 <Card.Body className="d-flex align-items-center justify-content-center">
//                   <span className="fs-1">{item.icon}</span>
//                 </Card.Body>
//               </Card>
//             </a>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default FollowUs;
