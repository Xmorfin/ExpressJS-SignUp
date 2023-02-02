//ES:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;

  res.send(
    `Success signup yang bernama: ${fName} ${lName} dengan email: ${email} `
  );
});

app.listen(3001, (err) => {
  err ? console.log(err) : console.log("Server running on port 3001");
});
