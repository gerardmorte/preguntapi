const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, "..", "dist");
app.use(express.static(buildPath));

// routes
app.use(require("./routes/index"));

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
