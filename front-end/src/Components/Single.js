import { Link } from "react-router-dom";

export default function Single({ single, index }) {
  return (
    <div>
      <Link to={`/singles/${index}`}>
        <h3>{single.name}</h3>
        <img src={single.image} alt={single.name} />
        <br />
        <em>
          ${single.price} - {single.pcs} pieces
        </em>
      </Link>
    </div>
  );
}
