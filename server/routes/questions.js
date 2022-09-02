const { Router } = require("express");
const router = Router();
const questions = require("../db.json");

router.get("/", (req, res) => {
    const category = req.query.category;
    const limit = req.query.limit || 10;

    if (category) {
        const question = questions
            .filter((question) => question.category === category)
            .slice(0, limit);
        res.json(question);
    } else {
        res.json(questions.slice(0, limit));
    }
});

module.exports = router;
