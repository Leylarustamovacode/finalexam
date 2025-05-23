import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
  const{id}=useParams()
   const [data, setdata] = useState({})
    function getData() {
      fetch("http://localhost:3000/product/"+id)
        .then((res) => res.json())
        .then((data) => setdata(data));
    }
    useEffect(() => {
      getData();
    }, []);
  return (
    <div> 
      <title>detail</title>
             <div >
              <img src={data.image} alt="" />
              <h1>{data.name}</h1>
              <p>{data.information}</p>
              <p>{data.price}</p>
              
             </div>
            
            </div>
  )
}

export default Detail