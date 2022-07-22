import React from "react";
import { useSelector } from "react-redux";
import FilterAndOrder from "../Filter&Order";
import Food from "../Food";
import Foods from "../Foods";
import Footer from "../Footer";
import Nav from "../NavBar";
import Search from "../Search";

function Home() {
  const food = useSelector((state) => state);
  return (
    <div>
      {food.recipe.length ? (
        <Nav /> && <Food />
      ) : (
        <>
          <Nav />
          <Search />
          <FilterAndOrder />
          <Foods />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
