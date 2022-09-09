const { Router } = require("express");
const router = Router();
const infoApi = require("../database/infoapi.json");

router.get("/", (req, res) => {
    res.json(infoApi);
});

module.exports = router;
