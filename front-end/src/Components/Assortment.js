import { Link } from "react-router-dom";
import ProductToCartForm from "./ProductToCartForm";

export default function Assortment({ assortment }) {
  return (
    <div className="assortment-box">
      <Link to={`/assortments/${assortment.id}`}>
        <h3>{assortment.name}</h3>
        <img src={assortment.image} alt={assortment.name} />
        <br />
        <em>
          ${assortment.price} - {assortment.pcs} pieces
        </em>
      </Link>
      <ProductToCartForm product={assortment} />
    </div>
  );
}
