import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import SearchBest from "./components/SearchBest";
import ProductViewModal from "./components/ProductViewModal";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <Routes />
            <SearchBest />
            <Footer />
            <ProductViewModal />
          </div>
        )}
      />
    </Router>
  );
}

export default App;
