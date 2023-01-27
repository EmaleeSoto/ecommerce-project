import { useState, useEffect } from "react";
import Assortment from "./Assortment";
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

  return (
    <div>
      {assortments.map((assortment, index) => {
        return <Assortment key={index} assortment={assortment} index={index} />;
      })}
    </div>
  );
}
