import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Single from "./Single";
import "./Singles.css";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Singles() {
  const [singles, setSingles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products/singles`)
      .then((res) => {
        setSingles(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Row xs={1} md={3} className="singles-row">
        {singles.map((single) => {
          return (
            <Col align="center" key={single.id}>
              <Single single={single} id={single.id} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
