import { Form, Button, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function ProductToCartForm({ product }) {
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(product.id);
  return (
    <div>
      {" "}
      {productQuantity > 0 ? (
        <div>
          <Form as={Row}>
            <Form.Label column="true" sm="6">
              In Cart: {productQuantity}
            </Form.Label>
            <Col sm="6">
              <Button
                sm="6"
                onClick={() => {
                  cart.addItemToCart(product.id);
                }}
                className="mx-2"
              >
                +
              </Button>
              <Button
                sm="6"
                onClick={() => {
                  cart.removeOneItemFromCart(product.id);
                }}
                className="mx-2"
              >
                -
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  cart.deleteItemFromCart(product.id);
                }}
                className="my-2"
              >
                Remove From Cart
              </Button>
            </Col>
          </Form>
        </div>
      ) : (
        <Button
          className="add-to-cart-button"
          onClick={() => {
            cart.addItemToCart(product.id, product);
          }}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}
