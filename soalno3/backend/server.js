const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inventory_db",
})

app.post("/inventory_db", (req, res) => {
  const sql = "INSERT INTO userdb (`nama`, `email`, `nomorHp`,`password`,`konfirmasiPassword`) VALUES (?)"
  const values = [req.body.nama, req.body.email, req.body.nomorHp, req.body.password, req.body.konfirmasiPassword]
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("error")
    }
    return res.json(data)
  })
})

app.post("/userdb", (req, res) => {
  const sql = "SELECT * FROM userdb WHERE `email` = ? AND `password` = ?"

  const values = [req.body.email, req.body.password]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("error")
    }
    if (data.length > 0) {
      return res.json("success")
    } else {
      return res.json("Failed")
    }
  })
})

app.get("/", (req, res) => {
  return res.json("from be")
})

app.get("/userdb", (req, res) => {
  const sql = "SELECT * FROM userdb"
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.listen(8081, () => {
  console.log("Listening on")
})
