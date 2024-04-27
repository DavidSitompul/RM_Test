import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [provinsi, setProvinsi] = useState([])
  const [kabupaten, setKabupaten] = useState([])
  const [kecamatan, setKecamatan] = useState([])
  const [kelurahan, setKelurahan] = useState([])

  useEffect(() => {
    const fetchProvinsi = async () => {
      const response = await axios.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      setProvinsi(response.data)
    }
    fetchProvinsi()
  }, [])

  const fetchKabupaten = async (provinsiId) => {
    const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiId}.json`)
    setKabupaten(response.data)
    setKecamatan([])
    setKelurahan([])
  }

  const fetchKecamatan = async (kabupatenId) => {
    const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kabupatenId}.json`)
    setKecamatan(response.data)
    setKelurahan([])
  }

  const fetchKelurahan = async (kecamatanId) => {
    const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatanId}.json`)
    setKelurahan(response.data)
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Provinsi:</label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => fetchKabupaten(e.target.value)}>
            <option value="">Pilih Provinsi</option>
            {provinsi.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kabupaten:</label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => fetchKecamatan(e.target.value)}>
            <option value="">Pilih Kabupaten</option>
            {kabupaten.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kecamatan:</label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => fetchKelurahan(e.target.value)}>
            <option value="">Pilih Kecamatan</option>
            {kecamatan.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kelurahan:</label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Pilih Kelurahan</option>
            {kelurahan.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default App
