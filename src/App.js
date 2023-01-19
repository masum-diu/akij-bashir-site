import React from "react";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import RoutePage from "./page/RoutePage";

const App = () => {
  return (
    <div className="display-size">
      <Header />
      <div className="top" style={{ height: "100vh" }}>
        <RoutePage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
