import { Link } from "react-router-dom";
import ProductToCartForm from "./ProductToCartForm";

export default function Assortment({ assortment, id }) {
  return (
    <div className="assortment-box">
      <Link to={`/assortments/${id}`}>
        <h3>{assortment.name}</h3>
        <img src={assortment.image} alt={assortment.name} />
        <br />
        <em>
          ${assortment.price} - {assortment.pcs} pieces
        </em>
      </Link>
      <ProductToCartForm id={id} product={assortment} />
    </div>
  );
}
