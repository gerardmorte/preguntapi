// const { response } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();

////MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use((request, response, next) => {
    console.log(request.method);
    console.log(request.path);
    console.log(request.body);
    console.log("-------");
    next();
});
//////////////  

let notes = [
    {
        id: 1,
        content: "Me tengo que suscribir! ...",
        date: "2019-05-02",
        important: true,
    },
    {
        id: 2,
        content: "Estudiar ...",
        date: "2019-05-02",
        important: false,
    },
    {
        id: 3,
        content: "Repasar ...",
        date: "2019-05-02",
        important: true,
    },
];

app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (request, response) => {
    response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
    const id = Number(request.params.id);
    const note = notes.find((note) => note.id === id);
    if (note) {
        response.json(note);
    } else {
        response.status(404).end();
        // response.send("<h1>No existe</h1>")
    }
});

app.use((request, response) => {
    response.status(404).json({
        error: "Not found",
    });
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
