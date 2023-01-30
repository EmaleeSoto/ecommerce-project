import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Single({ single, index }) {
  return (
    <div className="single">
      <Link to={`/singles/${index}`}>
        <h3>{single.name}</h3>
        <img src={single.image} alt={single.name} />
        <br />
        <em>
          ${single.price} - {single.pcs} pieces
        </em>
      </Link>
      <Button>Add to Cart</Button>
    </div>
  );
}
