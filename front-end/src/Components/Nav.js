import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/assortments">Assortment Boxes</Link>
      <Link to="/makeyourown">A La Carte</Link>
    </nav>
  );
}
