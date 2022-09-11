const express = require("express");
const app = express();
const path = require("path");

// settings
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());

// routes
const buildPath = path.join(__dirname, "..", "dist");
app.use(express.static(buildPath));

app.use("/api/v1", require("./routes/categories"));

app.use("/api/v1/quizzes", require("./routes/quizzes"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

// starting the server
const server = app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

module.exports = { app, server };
