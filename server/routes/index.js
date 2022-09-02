const { Router } = require("express");
const router = Router();
// const DB = require("../db.json");

router.get("/api", (req, res) => {
    res.json({ message: "Hello world!" });
});

module.exports = router;
