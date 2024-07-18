const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sign_up",
});

db.connect();

app.get("/", (req, res) => {
  return res.json("From backend side");
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO information ('name','email','password') VALUES(?)";

  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, values) => {
    if (err) {
      return res.json("error");
    }
    return res.json(values);
  });
});

app.listen(8080, () => {
  console.log("Listening");
});
