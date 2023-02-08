import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Assortment from "./Assortment";
import "./Assortments.css";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Assortments() {
  const [assortments, setAssortments] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products/assortments`)
      .then((res) => {
        setAssortments(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Row xs={1} md={3} className="assortments-row">
        {assortments.map((assortment) => {
          return (
            <Col align="center" key={assortment.id}>
              <Assortment assortment={assortment} id={assortment.id} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
