import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../Redux/Actions/action";
import Nav from "../NavBar";
import defaultImg from "../../assets/cooking.png";

function Food() {
  const dispatch = useDispatch();
  const params = useParams();
  const { image, title, dishTypes, diets, summary, healthScore, instructions } =
    useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipeById(params.id));
  }, [params, dispatch]);
  return (
    <>
      <Nav />
      <div>
        <img src={image ? image : defaultImg} alt="food" />
        <h2>{title}</h2>
        {dishTypes ? <p>{dishTypes + " "}</p> : null}

        {diets}
        <p>Summary:</p>
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        <p>Health score: {healthScore}</p>
        {instructions ? (
          <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
        ) : null}
      </div>
    </>
  );
}

export default Food;
