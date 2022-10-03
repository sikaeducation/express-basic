const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("you're the best....not");
});

app.listen(3000);
