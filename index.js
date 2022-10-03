const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked! It is TJ");
});

app.listen(3000);
