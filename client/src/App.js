import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/features/NavBar/NavBar";
import Footer from "./components/features/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
