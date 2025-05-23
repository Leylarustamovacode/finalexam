import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketProvider";
import "./navbar.scss";
function Navbar() {
  const { basket } = useContext(BasketContext);
  return (
   <header>
    <div className="container">
       <div className="navbar">
      <div >
        <Link style={{fontSize:"30px",fontWeight:"700"}}>Dealers</Link>
      </div>
      <div>
        {" "}
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/adminadd">AdminAdd</Link>
        <Link to="/basket">Basket{basket.length} </Link>
      </div>
    </div>
    </div>
   </header>
  );
}

export default Navbar;
