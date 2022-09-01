const { Router } = require("express");
const router = Router();
const DB = require("../db.json");

//GET ON API ROUTE /API
router.get("/api", (req, res) => {
    res.json({ message: "Hello world!" });
});

///GET QUIZ DB /API/QUIZ
router.get("/api/quiz", (req, res) => {
    res.json(DB);
});

module.exports = router;
