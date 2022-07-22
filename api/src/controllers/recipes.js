const axios = require("axios");
const { Recipe, Diet } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;
const { recipesWithInfo } = require("../controllers/jsonApiData.js");

const getRecipes = async (name) => {
  const db = await Recipe.findAll({
    include: { model: Diet },
  });
  //codigo para cuando me quedo sin apiRequests
  // const food = recipesWithInfo;
  // const recipe = food.results.map((r) => {
  //   return {
  //     id: r.id,
  //     image: r.image,
  //     title: r.title,
  //     diet: r.diets,
  //     healthScore: r.healthScore,
  //   };
  // });

  // cambiar el 2 por un 100 en &number=
  const food = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const recipe = food.data.results.map((r) => {
    return {
      id: r.id,
      image: r.image,
      title: r.title,
      diet: r.diets,
      healthScore: r.healthScore,
    };
  });
  const result = [...db, ...recipe];
  if (name) {
    const it = result.filter((r) =>
      r.title.toLowerCase().includes(name.toLowerCase())
    );
    return it.length ? it : { error: "there is no recipe with this name" };
  }
  return result;
};

const getRecipeById = async (id) => {
  if (id.length > 35) {
    const recipe = await Recipe.findOne({
      where: { id: id },
      include: [
        {
          model: Diet,
          // attributes: ["name"],
          // through: {
          //   attributes: [],
          // },
        },
      ],
    });
    return {
      image: recipe.image,
      title: recipe.title,
      dishTypes: recipe.dishTypes ? recipe.dishTypes : "",
      diets: recipe.diets.map((e) => e.name),
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      instructions: recipe.instructions,
    };
  }
  let recipe = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );

  return {
    image: recipe.data.image,
    title: recipe.data.title,
    dishTypes: recipe.data.dishTypes,
    diets: recipe.data.diets,
    summary: recipe.data.summary,
    healthScore: recipe.data.healthScore,
    instructions: recipe.data.instructions,
  };
};

module.exports = {
  getRecipes,
  getRecipeById,
};
