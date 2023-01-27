import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Assortments() {
  const [assortments, setAssortments] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products/assortments`)
      .then((res) => {
        setAssortments(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(assortments);

  return (
    <div>
      {assortments.map((assortment, index) => {
        return (
          <div>
            <h1>{assortment.name}</h1>
            <img src={assortment.image} alt={assortment.name} />
          </div>
        );
      })}
    </div>
  );
}
