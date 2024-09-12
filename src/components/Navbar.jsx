import React from "react";
import { Link } from "react-router-dom";
import Contact from "../pages/contact";
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

const Navbar = () => {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        background: "cyan ",
        color: "#551a8b"
      }}>
        <div>
          <h2>CDN Products</h2>
        </div>
        <div style={{
            display: "flex",
            gap: "10px"
        }}>
          <Link to="">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="services">Services</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "10px",
//     marginTop: "10px",
//     background: "cyan",
//     textDecoration: "none",
//     textDecoration: "none",
//   }}
