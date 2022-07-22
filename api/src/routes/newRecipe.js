const { Router } = require("express");
const { Recipe, Diet } = require("../db");

const router = Router();

router.post("/", async (req, res, next) => {
  const { title, summary, healthScore, instructions, diet } = req.body;
  try {
    const newRecipe = await Recipe.create({
      title,
      summary,
      healthScore,
      instructions,
    });
    // const dietDb = await Diet.findAll({ where: { name: diets } });
    const [dietDb, created] = await Diet.findOrCreate({
      where: { name: diet },
    });
    newRecipe.addDiet(await dietDb);
    res.status(200).send({ msg: "Recipe created succesfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
