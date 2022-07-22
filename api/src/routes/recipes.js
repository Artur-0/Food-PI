const { Router } = require("express");
const { getDiets } = require("../controllers/diets");
const { getRecipes, getRecipeById } = require("../controllers/recipes");
const { Recipe, Diet } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  const recipes = await getRecipes();
  try {
    if (name) {
      return res.send(await getRecipes(name));
    }
    res.send(recipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    res.send(await getRecipeById(id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
