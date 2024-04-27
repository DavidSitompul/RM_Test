-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Apr 2024 pada 08.24
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `gambar` blob NOT NULL,
  `kode_barang` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kategori` enum('Kategori 1','Kategori 2','Kategori 3') NOT NULL,
  `stok` int(11) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `items`
--

INSERT INTO `items` (`id`, `gambar`, `kode_barang`, `nama`, `kategori`, `stok`, `harga`) VALUES
(31, 0x61736173, '1', '121', '', 1212, 1212),
(32, '', '', '', '', 0, 0),
(33, '', '', 'davu', '', 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `userdb`
--

CREATE TABLE `userdb` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nomorHp` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `konfirmasiPassword` varchar(255) NOT NULL
) ;

--
-- Dumping data untuk tabel `userdb`
--

INSERT INTO `userdb` (`id`, `nama`, `email`, `nomorHp`, `password`, `konfirmasiPassword`) VALUES
(1, 'david', 'dave@gmail.com', '081212129898', '10101010', '10101010'),
(4, 'mantap', 'mantap@gmail.com', '0817873133131', '12345678', '12345678'),
(5, 'mantaps', 'mantaps@gmail.com', '081234566787', '12345678', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `userdb`
--
ALTER TABLE `userdb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT untuk tabel `userdb`
--
ALTER TABLE `userdb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
