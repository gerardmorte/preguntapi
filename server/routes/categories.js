const { Router } = require("express");
const router = Router();
const categories = require("../database/categories.json");

router.get("/", (req, res) => {
    res.json(categories);
});

module.exports = router;
