import { Link } from "react-router-dom";

export default function Assortment({ assortment, index }) {
  return (
    <div className="assortment-box">
      <Link to={`/assortments/${index}`}>
        <h3>{assortment.name}</h3>
        <img src={assortment.image} alt={assortment.name} />
        <br />
        <em>
          ${assortment.price} - {assortment.pcs} pieces
        </em>
        <button className="incrementer">+</button>
        <button className="decrementer">-</button>
        <button className="add-to-cart">Add to Cart</button>
      </Link>
    </div>
  );
}
