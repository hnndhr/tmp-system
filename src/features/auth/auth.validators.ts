export function validateLogin(username: string, password: string) {
  const errors: { username?: string; password?: string } = {}

  if (!username) errors.username = "Username wajib diisi"
  if (!password) errors.password = "Password wajib diisi"

  return errors
}