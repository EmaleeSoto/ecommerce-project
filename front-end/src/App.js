import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Nav from "./Components/Nav";
import AssortedBoxes from "./Pages/AssortedBoxes";
import ALaCarte from "./Pages/ALaCarte";
import AssortedDetails from "./Components/AssortedDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/assortments" element={<AssortedBoxes />} />
          <Route path="/assotments/:index" element={<AssortedDetails />} />
          <Route path="/singles" element={<ALaCarte />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
