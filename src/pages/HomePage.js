import React from "react";
import Header from "../components/Home/Header";
import Products from "../components/Home/Products";
function HomePage() {
  return (
    <div className={` mx-auto max-w-5xl py-6 min-h-screen  `}>
      <Header />
      <Products />
    </div>
  );
}

export default HomePage;
