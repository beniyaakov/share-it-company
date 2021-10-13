import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/features/NavBar/NavBar";
import Footer from "./components/features/Footer/Footer";
import AppRouter from "./components/AppRouter/AppRouter";


import AuthContextProvider from "./components/Context/AuthContextProvider";

function App() {


  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <NavBar />
          <AppRouter />
          <Footer />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
