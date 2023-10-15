const User = require("./model/testeConnection");
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/123", (req, res) => {
  const newUser = new User({
    name: "Alice",
    email: "alice@example.com",
    age: 30,
  });

  newUser
    .save()
    .then((user) => {
      console.log("Novo usuário criado:", user);
    })
    .catch((err) => {
      console.error("Erro ao criar usuário:", err);
    });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
