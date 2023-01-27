import { Link } from "react-router-dom";

export default function Assortment({ assortment, index }) {
  return (
    <div>
      <Link to={`/assortments/${index}`}>
        <h3>{assortment.name}</h3>
        <img src={assortment.image} alt={assortment.name} />
        <br />
        <em>
          ${assortment.price} - {assortment.pcs} pieces
        </em>
      </Link>
    </div>
  );
}
