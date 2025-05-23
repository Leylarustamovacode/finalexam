import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../context/BasketProvider";

function Basket() {
  const { basket, addbasket, decbasket } = useContext(BasketContext);
 

  return (
    <div>
      <title>basket</title>
      <div>
        {
          basket.map((data)=>{
           return  <div>
            <img src={data.image} alt="" />
           <h1>{data.name}</h1>
           <p>{data.information}</p>
           <p>{data.price}</p>
   
           <button onClick={() => addbasket(product)}>add</button>
           <button> say:{basket.length}</button>
           <button onClick={() => decbasket(product)}>delete</button>
           </div>
          
          })
        }
      </div>
    </div>
  );
}

export default Basket;
