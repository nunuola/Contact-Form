import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/Contactform";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
