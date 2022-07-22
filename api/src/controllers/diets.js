const { Diet } = require("../db");

const getDiets = async () => {
  const diets = [
    "gluten free",
    "ketogenic",
    "lacto ovo vegetarian",
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "dairy free",
    "whole 30",
  ];

  diets.map(async (d) => await Diet.findOrCreate({ where: { name: d } }));

  return await Diet.findAll();
};

module.exports = {
  getDiets,
};
