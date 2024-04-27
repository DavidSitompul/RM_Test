import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import validation from "./LoginValidasi"
import axios from "axios"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const [error, setError] = useState({})
  const handleinput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validation(values)
    setError(validationErrors)
    if (!validationErrors.email && !validationErrors.password) {
      axios
        .post("http://localhost:8081/userdb", {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          if (res.data === "success") {
            console.log("berhasil login.")
            navigate("/Home")
          } else {
            console.log("Email atau password anda salah")
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
        <h2>Masuk</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" onChange={handleinput} placeholder="masukkan email" className="form-control round-0" />
            {error.email && <span className="text-danger">{error.email} </span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="masukkan Password" onChange={handleinput} className="form-control round-0" />
            {error.password && <span className="text-danger">{error.password} </span>}
          </div>
          <button type="submit" className="btn btn-success">
            Masuk
          </button>
          <Link to="/Daftar" type="submit" className="btn btn-default border">
            Daftar
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
