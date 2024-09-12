import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setData(res.data);
    }
    getData();
  }, []);

  // fetch('https://fakestoreapi.com/docs')
  // .then(res => res.json())
  // .then(json =>{
  //   console.log(json);
  //   setProducts(json)
  // }).catch((err) => {
  //   console.log(err);
  // })

  return (
    <div style={{display: "flex", flexWrap: "wrap" }}>
      <div style={{width: "100%"}}>
      <h1
        style={{
          color: "#551a8b",
          textAlign: "center",
          fontSize: "3rem",
          display: "block",
          margin: "10px"
        }}
      >
        Profiles
      </h1>
      </div>
      {data ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                  flexWrap: "wrap",
                  border: "2px solid black",
                  padding: "8px",
                  margin: "8px",
                  marginLeft: "40px",
                }}
              >
                <div style={{maxWidth: "250px", minHeight: "200px", marginTop: "5px"}}>
                  <h3>Fullname : {item.name}</h3>
                  <h3>Email : {item.email}</h3>
                  <h3>Phone-Number : {item.phone}</h3>  
                  <h3>Website : {item.website}</h3>
                  <button
                    style={{
                      marginTop: "30px",
                      padding: "6px",
                      background: "#551a8b",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    Show More
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Home;
