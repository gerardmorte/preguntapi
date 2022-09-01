const express = require("express");

const path = require('path');

const app = express();

// const cors = require("cors");


// ////MIDDLEWARES
// app.use(cors());
// app.use(express.json());
// app.use((request, response, next) => {
//     console.log(request.method);
//     console.log(request.path);
//     console.log(request.body);
//     console.log("-------");
//     next();
// });
// //////////////

app.use(express.static(path.resolve(__dirname, '../client/build')));

//OPTIONAL?
app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>");
});
///////////////


app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.get("/api/nombres", (req, res) => {
    res.json({ nombre: "Gerard" });
});

// app.get("/api/notes/:id", (request, response) => {
//     const id = Number(request.params.id);
//     const note = notes.find((note) => note.id === id);
//     if (note) {
//         response.json(note);
//     } else {
//         response.status(404).end();
//         // response.send("<h1>No existe</h1>")
//     }
// });

// app.use((request, response) => {
//     response.status(404).json({
//         error: "Not found",
//     });
// });

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
