const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let todos = [];

// GET all todos
app.get("/todos", (req, res) => {
    res.json(todos);
});

// ADD todo
app.post("/todos", (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        date: req.body.date
    };
    todos.push(newTodo);
    res.json(newTodo);
});

// UPDATE todo
app.put("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    todos = todos.map(todo =>
        todo.id === id
            ? { ...todo, text: req.body.text, date: req.body.date }
            : todo
    );

    res.json({ message: "Updated" });
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));