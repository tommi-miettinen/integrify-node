import express from "express";

const app = express();

app.get("/", (_, res) => res.send({ message: "Hello, this is get response" }));
app.post("/", (_, res) => res.json({ message: "Hello, this is post response" }));
app.put("/", (_, res) => res.send({ message: "Hello, this is put response" }));
app.delete("/", (_, res) => res.send({ message: "Hello, this is delete response" }));
app.patch("/", (_, res) => res.send({ message: "Hello, this is patch response" }));

app.listen(5000);
