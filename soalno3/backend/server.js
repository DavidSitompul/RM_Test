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
// menampilkan item
app.get("/items", (req, res) => {
  const sql = "SELECT * FROM items"
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})
// create
app.post("/items", (req, res) => {
  const { gambar, kode_barang, nama, kategori, stok, harga } = req.body
  const sql = "INSERT INTO items (gambar, kode_barang, nama, kategori, stok, harga) VALUES (?, ?, ?, ?, ?, ?)"
  const values = [gambar, kode_barang, nama, kategori, stok, harga]
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting item:", err)
      return res.json({ success: false, error: err.message })
    }
    console.log("Item added successfully")
    return res.json({ success: true })
  })
})

app.listen(8081, () => {
  console.log("Listening on")
})
