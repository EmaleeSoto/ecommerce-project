import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function ProductDetails() {
  const [assortedBox, setAssortedBox] = useState({});
  const { product, index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/products/${product}/${index}`)
      .then((res) => {
        setAssortedBox(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  return (
    <div>
      <h1>{assortedBox.name}</h1>
      <img src={assortedBox.image} alt={assortedBox.name} />
    </div>
  );
}
