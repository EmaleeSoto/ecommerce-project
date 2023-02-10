import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateUser.css";
const API = process.env.REACT_APP_API_URL;

export default function CreateUser() {
  const [newUser, setNewUser] = useState({ email_list: false });
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
    console.log(newUser);
  };

  const handleCheckBoxChange = (event) => {
    if (newUser.email_list === null) {
      setNewUser({ ...newUser, [event.target.id]: true });
    } else {
      setNewUser({ ...newUser, [event.target.id]: !newUser.email_list });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/customers`, newUser)
      .then((res) => {
        console.log(res.data.payload);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="create-user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label>Street Address: </label>
          <input
            type="text"
            className="form-control"
            id="street_address"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label>Postal Code: </label>
          <input
            type="number"
            className="form-control"
            id="postal_code"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label>City: </label>
          <input
            type="text"
            className="form-control"
            id="city"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label>State: </label>
          <input
            type="text"
            className="form-control"
            id="state"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label>Add me to Simply Devine's email list: </label>
          <input
            type="checkbox"
            className="checkbox"
            id="email_list"
            onChange={handleCheckBoxChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
