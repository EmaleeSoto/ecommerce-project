import { Link } from "react-router-dom";
import ProductToCartForm from "./ProductToCartForm";

export default function Single({ single, id }) {
  return (
    <div className="single">
      <Link to={`/singles/${id}`}>
        <h3>{single.name}</h3>
        <img src={single.image} alt={single.name} />
        <br />
        <em>
          ${single.price} - {single.pcs} pieces
        </em>
      </Link>
      <ProductToCartForm id={id} product={single} />
    </div>
  );
}
