const path = require("path");
const express = require("express");

const app = express();

const buildPath = path.join(__dirname, "..", "dist");
app.use(express.static(buildPath));

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.get("/api/nombres", (req, res) => {
    res.json({ nombre: "Gerard" });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
