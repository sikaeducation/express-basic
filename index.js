const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked! first day training Ish");
});

app.listen(3000);
