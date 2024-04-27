function validation(values) {
  let error = {}
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?!\s)[a-zA-Z0-9\s]{8,}(?<!\s)$/
  const nomor_pattern = /^08\d{8,15}$/

  if (values.name === "") {
    error.name = "nama tidak boleh kosong"
  } else {
    error.name = ""
  }

  if (values.email === "") {
    error.email = "email tidak boleh kosong"
  } else if (!email_pattern.test(values.email)) {
    error.email = "email tidak cocok"
  } else {
    error.email = ""
  }
  if (values.nomor === "") {
    error.nomor = "nomor tidak boleh kosong"
  } else if (!nomor_pattern.test(values.nomor)) {
    error.nomor = "awali dengan 08"
  } else {
    error.nomor = ""
  }

  if (values.password === "") {
    error.password = "password tidak boleh kosong"
  } else if (!password_pattern.test(values.password)) {
    error.password = "password tidak cocok"
  } else {
    error.password = ""
  }
  if (values.confirmPassword === "") {
    error.confirmPassword = "konfirmasi password tidak boleh kosong"
  } else if (values.password !== values.confirmPassword) {
    error.confirmPassword = "konfirmasi password tidak cocok"
  } else {
    error.confirmPassword = ""
  }

  return error
}

export default validation
