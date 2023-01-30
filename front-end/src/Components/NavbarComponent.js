import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import "./Nav.css";

export default function NavbarComponent() {
  const navigate = useNavigate();
  return (
    <Navbar expand="sm">
      {/* expand: Determines where nav bar collapses for mobile screens */}
      <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
      {/* Brand: shows title */}
      <Navbar.Toggle></Navbar.Toggle>
      {/* Toggle: Elements that collapse on mobile view */}
      <Navbar.Collapse className="justify-content-end">
        {/* Collapse: Determines which elements will collapse (to the right) */}
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
      <div className="link-wrapper">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/assortments">Assortment Boxes</Link>
        <Link to="/singles">A La Carte</Link>
      </div>
    </Navbar>
  );
}
