const { Router } = require("express");
const router = Router();

const movies = require("../db.json");

router.get("/", (req, res) => {
    res.json(movies);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.filter((movie) => movie.id === String(id));
    res.json(movie);
});

module.exports = router;
