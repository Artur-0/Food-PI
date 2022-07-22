import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../Redux/Actions/action";
import { Link } from "react-router-dom";
import Search from "../Search";
import defaultImg from "../../assets/cooking.png";
import { Card, Item } from "./styledFoods";

function Foods() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const page = reduxState.page;
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <>
      <Card>
        {reduxState.filteredRecipes.length
          ? reduxState.filteredRecipes.slice(page[0], page[1]).map((r) => {
              return (
                <Item key={r.id}>
                  <img src={r.image ? r.image : defaultImg} alt="food" />
                  <Link to={`/food/${r.id}`}>
                    <h4>{r.title}</h4>
                  </Link>
                  <p>{r.diet ? r.diet + "," : r.diets.map((d) => d.name)} </p>
                </Item>
              );
            })
          : reduxState.searchResult.length
          ? reduxState.searchResult.slice(page[0], page[1]).map((r) => {
              return (
                <Item key={r.id}>
                  <img src={r.image ? r.image : defaultImg} alt="food" />
                  <Link to={`/food/${r.id}`}>
                    <h4>{r.title}</h4>
                  </Link>
                  <p>{r.diet ? r.diet + "," : r.diets.map((d) => d.name)} </p>
                </Item>
              );
            })
          : reduxState.recipes.slice(page[0], page[1]).map((r) => {
              return (
                <Item key={r.id}>
                  <img src={r.image ? r.image : defaultImg} alt="food" />
                  <Link to={`/food/${r.id}`}>
                    <h4>{r.title}</h4>
                  </Link>
                  <p>{r.diet ? r.diet + "," : r.diets.map((d) => d.name)} </p>
                </Item>
              );
            })}
      </Card>
    </>
  );
}

export default Foods;
