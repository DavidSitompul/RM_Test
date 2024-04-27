function validation(values) {
  let error = {}

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?!\s)[a-zA-Z0-9\s]{8,}(?<!\s)$/

  if (values.email === "") {
    error.email = "email tidak boleh kosong"
  } else if (!email_pattern.test(values.email)) {
    error.email = "email tidak cocok"
  } else {
    error.email = ""
  }
  if (values.password === "") {
    error.password = "password tidak boleh kosong"
  } else if (!password_pattern.test(values.password)) {
    error.password = "password tidak cocok"
  } else {
    error.password = ""
  }

  return error
}

export default validation
