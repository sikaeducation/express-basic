const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked, my name is Mary!");
});

app.listen(3000);
