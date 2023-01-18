import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutePage from "./page/RoutePage";

const App = () => {
  return (
    <div className="bg-danger">
      <Header />
      <div className="top" style={{ height: "100vh" }}>
        <RoutePage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
