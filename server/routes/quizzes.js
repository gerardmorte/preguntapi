const { Router } = require("express");
const router = Router();
const quizzes = require("../database/quizzes.json");

router.get("/", (req, res) => {
    const category = req.query.category;
    const limit = req.query.limit;

    if (category) {
        const filteredQuizzes = quizzes.filter(
            (quiz) => quiz.category === category
        );

        if (limit > filteredQuizzes.length) {
            res.json({
                error: `Max limit questions of ${category} is ${filteredQuizzes.length}`,
            });
        } else {
            res.json(
                filteredQuizzes.slice(0, limit || filteredQuizzes.length)
            );
        }
    } else {
        res.json(quizzes);
    }
});

module.exports = router;
