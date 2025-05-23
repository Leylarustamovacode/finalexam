import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketProvider";
import "./home.scss";
function Home() {
  const { addbasket, basket } = useContext(BasketContext);
  const [data, setdata] = useState([]);
  function getData() {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="text-box">
          <h1>MADWELL</h1>
          <h5>Summer Collection</h5>
          <p>1,499 $1,999</p>
          <button style={{ color: "#207DFF" }}>Shop Now</button>
          <button style={{ backgroundColor: "#207DFF", color: "white" }}>
            Shop Now
          </button>
        </div>
        <div className="image-box">
          <img
            src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png"
            alt=""
          />
        </div>
      </div>

      <title>ana sehife</title>

      <div className="myproducts">
        {data.map((product) => (
          <div className="box">
            <img src={product.image} alt="" />
            <h1>{product.name}</h1>
            <p>{product.information}</p>
            <h5>{product.price}</h5>
            <Link to={`/detail/${product._id}`}>
              <button>Detail</button>
            </Link>
            <button onClick={() => {
              addbasket(product)
              console.log("basket", basket);
              
            }}>Basket</button>
          </div>
        ))}
      </div>

      <div className="jacket">
        <div className="image">
          <img
            src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png"
            alt=""
          />
        </div>
        <div className="text">
          <p>#New Summer Collection 2019</p>
          <h1>Jacket</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="collections">
        <p style={{fontSize:"40px",marginTop:"40px"}}>COLLECTIONS</p>
        <div className="boxes">
          <div className="box">
            <img src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" alt="" />

            <h1>Marc Jacobs Bag</h1>
            <h5>Summer Collection</h5>
            <p>$9.50</p>
          </div>
          <div className="box">
            <img src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" alt="" />

            <h1>The Belt</h1>
            <h5>Summer Collection</h5>
            <p>$9.50</p>
          </div>
          <div className="box">
            <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" />

            <h1>The Shoe</h1>
            <h5>Summer Collection</h5>
            <p>$9.50</p>
          </div>
        </div>
      </div>
      <div className="coat">
        <div className="image">
          <img
            src="https://preview.colorlib.com/theme/dealers/images/model_5.png"
            alt=""
          />
        </div>
        <div className="text">
          <p>#New Summer Collection 2019</p>
          <h1>New Denim <br />Coat</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
