const express = require("express")
const app = express();


const PORT = 8000;

app.get("/", (req, res) => {
  res.send(`<h1>everything is working<h1/>`)
})

app.listen(PORT, () => {
  console.log("Everything is working");
})
