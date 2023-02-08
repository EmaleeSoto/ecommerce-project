import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function CartProduct({ cart, item }) {
  const { id, name, price, quantity } = item;

  return (
    <li>
      <Link to={`/${item.type}/${id}`}>
        {name} | ${price} (x
        {quantity})
      </Link>
      <br></br>
      <Button
        size="sm"
        onClick={() => {
          cart.addItemToCart(item);
        }}
      >
        +
      </Button>
      <Button
        size="sm"
        onClick={() => {
          cart.deleteItemFromCart(id);
        }}
      >
        Remove Item
      </Button>
      <Button
        size="sm"
        onClick={() => {
          cart.removeOneItemFromCart(id);
        }}
      >
        -
      </Button>
      <hr></hr>
    </li>
  );
}
