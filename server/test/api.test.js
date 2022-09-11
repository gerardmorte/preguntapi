const supertest = require("supertest");
const { app, server } = require("../index");

const api = supertest(app);

const initialNotes = [];

test("categories info are returned as json", async () => {
    await api
        .get("/api/v1")
        .expect(200)
        .expect("Content-Type", /application\/json/);
});

test("quizzes are returned as json", async () => {
    await api
        .get("/api/v1/questions")
        .expect(200)
        .expect("Content-Type", /application\/json/);
});

test("there are categories", async () => {
    const response = await api.get("/api/v1");
    expect(response.body[0] == "categories");
});

test("there are correct keys on quizzes", async () => {
    const response = await api.get("/api/v1/questions");
    expect(
        Object.keys(response.body[0]).includes(
            "id",
            "category",
            "question",
            "answers",
            "correct_answer"
        )
    );
});

afterAll(() => {
    server.close();
});
