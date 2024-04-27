import React from "react"
import Login from "./Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Daftar from "./Daftar"
import Home from "./Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Daftar" element={<Daftar />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
