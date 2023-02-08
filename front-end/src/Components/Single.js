import { Link } from "react-router-dom";
import ProductToCartForm from "./ProductToCartForm";

export default function Single({ single }) {
  return (
    <div className="single">
      <Link to={`/singles/${single.id}`}>
        <h3>{single.name}</h3>
        <img src={single.image} alt={single.name} />
        <br />
        <em>
          ${single.price} - {single.pcs} pieces
        </em>
      </Link>
      <ProductToCartForm product={single} />
    </div>
  );
}
