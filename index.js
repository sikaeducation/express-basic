const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("This test app!");
});

app.listen(3000);
