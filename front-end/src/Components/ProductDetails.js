import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { product_type, index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/products/${product_type}/${index}`)
      .then((res) => {
        setProduct(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
    </div>
  );
}
