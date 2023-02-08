import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Navbar, Modal, ModalHeader } from "react-bootstrap";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";
import "./Nav.css";

export default function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

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
        <div className="link-wrapper">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/assortments">Assortment Boxes</Link>
          <Link to="/singles">A La Carte</Link>
        </div>
        <Button className="cart-button" onClick={handleShow}>
          Cart ({productsCount} Items)
        </Button>
      </Navbar.Collapse>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              <ul>
                {cart.items.map((currentItem, index) => {
                  return (
                    <CartProduct
                      key={currentItem.id}
                      cart={cart}
                      item={currentItem}
                    />
                  );
                  // <li>
                  //   <Link to={`/assortments/${currentItem.id}`}>
                  //     {currentItem.name} | ${currentItem.price} (x
                  //     {currentItem.quantity})
                  //   </Link>
                  //   <br></br>
                  //   <Button
                  //     size="sm"
                  //     onClick={() => {
                  //       cart.addItemToCart(currentItem.id);
                  //     }}
                  //   >
                  //     +
                  //   </Button>
                  //   <Button
                  //     size="sm"
                  //     onClick={() => {
                  //       cart.deleteItemFromCart(currentItem.id);
                  //     }}
                  //   >
                  //     Remove Item
                  //   </Button>
                  //   <Button
                  //     size="sm"
                  //     onClick={() => {
                  //       cart.removeOneItemFromCart(currentItem.id);
                  //     }}
                  //   >
                  //     -
                  //   </Button>
                  //   <hr></hr>
                  // </li>
                })}
              </ul>
              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase!</Button>
            </>
          ) : (
            <h1>No items in cart</h1>
          )}
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}
