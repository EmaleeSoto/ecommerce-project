import { useState, useEffect } from "react";
import Single from "./Single";
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
      {singles.map((single, index) => {
        return <Single key={index} single={single} index={index} />;
      })}
    </div>
  );
}
