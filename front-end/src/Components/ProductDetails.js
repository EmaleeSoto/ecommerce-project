import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
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
    <div className="details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <h3>What's in this product</h3>
      <h3>
        {product.flavor?.split(", ").map((f) => {
          return <p key={f}>{f}</p>;
        })}
      </h3>
      <p>{product.stock_status && "In Stock"}</p>
    </div>
  );
}
