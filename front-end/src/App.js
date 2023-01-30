import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //stylesheets for bootstrap component
import { Container } from "react-bootstrap"; //bootstrap component that creates space from edges of screen
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import NavbarComponent from "./Components/NavbarComponent";
import AssortedBoxes from "./Pages/AssortedBoxes";
import ALaCarte from "./Pages/ALaCarte";
import ShowOneProduct from "./Pages/ShowOneProduct";
import CancelledOrder from "./Pages/CancelledOrder";
import SuccessfulOrder from "./Pages/SuccessfulOrder";

function App() {
  return (
    <Container className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/assortments" element={<AssortedBoxes />} />
          <Route path="/:product/:index" element={<ShowOneProduct />} />
          <Route path="/singles" element={<ALaCarte />} />
          <Route path="/cancelled" element={<CancelledOrder />} />
          <Route path="/success" element={<SuccessfulOrder />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
