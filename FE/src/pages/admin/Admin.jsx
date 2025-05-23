import React, { useEffect, useState } from "react";

function Admin() {
  const [data, setdata] = useState([]);

  const [search, setsearch] = useState("");
  const [sort, setsort] = useState({ name: "name", order: true });
  function getData() {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }
  useEffect(() => {
    getData();
  }, []);
  function Delete(id) {
    fetch("http://localhost:3000/product/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  }
  return (
    <div>
      <title>admin</title>
      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button onClick={() => setsort({ "name": "name", "order": true })}>
        a-z
      </button>
      <button onClick={() => setsort({ "name": "name", "order": false })}>
        z-a
      </button>
      <button onClick={() => setsort({ "name": "price", "order": true })}>
        artan
      </button>
      <button onClick={() => setsort({ "name": "price", "order": false })}>
        azalan
      </button>
      <table border={1} style={{ textAlign: "center", width: "100%" }}>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>information</th>
            <th>price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data
            .toSorted((a,b) => sort.order ?a[sort.name] > b[sort.name] ? 1 : ((b[sort.name] > a[sort.name]) ? -1 : 0):a[sort.name] < b[sort.name] ? 1 : ((b[sort.name] < a[sort.name]) ? -1 : 0))
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <tr>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.information}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => Delete(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
