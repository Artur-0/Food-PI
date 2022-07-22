const { Router } = require("express");
const { getDiets } = require("../controllers/diets");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await getDiets());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
