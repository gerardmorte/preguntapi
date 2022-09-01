const { Router } = require("express");
const router = Router();

router.get("/movies", (req, res) => {
    res.send("movies");
});

module.exports = router;
