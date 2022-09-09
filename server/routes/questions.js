const { Router } = require("express");
const router = Router();
const questions = require("../database/db.json");

router.get("/", (req, res) => {
    const category = req.query.category;
    const limit = req.query.limit;

    if (category) {
        const filteredQuestions = questions.filter(
            (question) => question.category === category
        );

        if (limit > filteredQuestions.length) {
            res.json({
                error: `Max limit questions of ${category} is ${filteredQuestions.length}`,
            });
        } else {
            res.json(
                filteredQuestions.slice(0, limit || filteredQuestions.length)
            );
        }
    } else {
        res.json(questions);
    }
});

module.exports = router;
