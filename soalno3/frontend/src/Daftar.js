import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import validation from "./DaftarValidasi"
import axios from "axios"

const Daftar = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    nomor: "",
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate()
  const [error, setError] = useState({})
  const handleinput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validation(values))
    if (!error.name && !error.email && !error.nomor && !error.password && !error.confirmPassword) {
      axios
        .post("http://localhost:8081/inventory_db", {
          nama: values.name,
          email: values.email,
          nomorHp: values.nomor,
          password: values.password,
          konfirmasiPassword: values.confirmPassword,
        })
        .then((res) => {
          if (res.data === "error") {
            console.log("Terjadi kesalahan saat memasukkan data.")
          } else {
            console.log("Data berhasil dimasukkan.")
            navigate("/")
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
        <h2>Daftar</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Nama</label>
            <input type="name" onChange={handleinput} placeholder="masukkan nama" name="name" className="form-control round-0" />
            {error.name && <span className="text-danger">{error.name} </span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" onChange={handleinput} placeholder="masukkan email" className="form-control round-0" />
            {error.email && <span className="text-danger">{error.email} </span>}
          </div>
          <div className="mb-3">
            <label htmlFor="number">Nomor</label>
            <input type="number" onChange={handleinput} placeholder="masukkan nomor" name="nomor" className="form-control round-0" />
            {error.nomor && <span className="text-danger">{error.nomor} </span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="masukkan Password" name="password" onChange={handleinput} className="form-control round-0" />
            {error.password && <span className="text-danger">{error.password} </span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Konfirmasi Password</label>
            <input type="password" placeholder="konfirmasi Password" name="confirmPassword" onChange={handleinput} className="form-control round-0" />
            {error.confirmPassword && <span className="text-danger">{error.confirmPassword} </span>}
          </div>
          <button type="submit" className="btn btn-success">
            Daftar
          </button>
          <Link to="/" type="submit" className="btn btn-default border">
            Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Daftar
