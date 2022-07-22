const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const recipesRoute = require("./recipes.js");
const dietsRoute = require("./diets.js");
const newRecipe = require("./newRecipe");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipesRoute);
router.use("/diets", dietsRoute);
router.use("/create", newRecipe);

module.exports = router;
