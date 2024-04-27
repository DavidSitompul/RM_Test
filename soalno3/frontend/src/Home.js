import React, { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState({
    gambar: "",
    kode_barang: "",
    nama: "",
    kategori: "",
    stok: "",
    harga: "",
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/items")
      setItems(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8081/items", newItem)
      setNewItem({
        gambar: "",
        kode_barang: "",
        nama: "",
        kategori: "",
        stok: "",
        harga: "",
      })
      fetchData() // Refresh data setelah menambahkan item baru
    } catch (error) {
      console.error("Error adding item:", error)
    }
  }

  return (
    <div className="container">
      <h1 className="my-4">CRUD Barang</h1>
      <div className="mb-4">
        <h2>Tambah Barang</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Gambar URL:</label>
            <input type="text" name="gambar" value={newItem.gambar} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Kode Barang:</label>
            <input type="text" name="kode_barang" value={newItem.kode_barang} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Nama:</label>
            <input type="text" name="nama" value={newItem.nama} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Kategori:</label>
            <input type="text" name="kategori" value={newItem.kategori} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Stok:</label>
            <input type="text" name="stok" value={newItem.stok} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Harga:</label>
            <input type="text" name="harga" value={newItem.harga} onChange={handleInputChange} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Tambah Barang
          </button>
        </form>
      </div>
      <div>
        <h2>Data Barang</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Gambar</th>
              <th>Kode Barang</th>
              <th>Nama</th>
              <th>Kategori</th>
              <th>Stok</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.gambar} alt={item.nama} width="100" />
                </td>
                <td>{item.kode_barang}</td>
                <td>{item.nama}</td>
                <td>{item.kategori}</td>
                <td>{item.stok}</td>
                <td>{item.harga}</td>
                <td>
                  <button>Ubah</button>
                  <button>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
