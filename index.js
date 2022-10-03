const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked, and my name is mahendra test");
});

app.listen(3000);
