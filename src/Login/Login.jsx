// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import nykaFormLogo from "../assets/nykaa-removebg-preview.png";
// import { login } from "../features/AuthSlice";
// import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.auth.users);



// const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await dispatch(login({ email, password })).unwrap(); 
//       console.log("Login Success:", response);

//       if (response && response.role) {
//         switch (response.role) {
//           case "admin":
//             navigate("/");
//             break;
//           case "seller":
//             navigate("/");
//             break;
//           default:
//             navigate("/");
//         }
//       } else {
//         alert("Invalid role. Please contact support.");
//       }

//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Login failed. Please check your credentials.");
//     }
//   };



//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           width: "50%",
//           maxWidth: "600px",
//           backgroundColor: "pink",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//           maxHeight: "70vh",
//           overflowY: "auto",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             marginBottom: "10px",
//           }}
//         >
//           <img
//             alt="Company Logo"
//             src={nykaFormLogo}
//             style={{ width: "300px", height: "auto" }}
//           />
//         </div>
//         <h3
//           style={{
//             textAlign: "center",
//             fontWeight: "bold",
//             marginBottom: "20px",
//           }}
//         >
//           Login With Nykaa
//         </h3>

//         <Form onSubmit={handleLogin}>
//           <Row className="mb-3">
//             <Form.Group as={Col} controlId="formGridEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="dark" type="submit" className="w-100">
//             Login
//           </Button>
//           <p>
//             if you don't have account please <a href="/signup"> Signup</a>
//           </p>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import nykaFormLogo from "../assets/nykaa-removebg-preview.png";
import { login } from "../features/AuthSlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      console.log("Attempting to log in with:", { email, password });

      const response = dispatch(login({ email, password }));
navigate("/");
      console.log("Login Success Response:", response);

      // if (response && response.userType) {

      //   switch (response.userType) {
      //     case "admin":
      //       navigate("/");
      //       break;
      //     case "seller":
      //       navigate("/");
      //       break;
      //     default:
      //       navigate("/");
      //   }

      //   setEmail("");
      //   setPassword("");
      // }
      // } else {
      //   setError("Invalid login. Please check your credentials.");
      // }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "50%",
          maxWidth: "600px",
          backgroundColor: "pink",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <img
            alt="Company Logo"
            src={nykaFormLogo}
            style={{ width: "300px", height: "auto" }}
          />
        </div>
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Login With Nykaa
        </h3>

        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}

        <Form onSubmit={handleLogin}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>
          <p>
            If you don't have an account, please <a href="/signup"> Signup</a>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
