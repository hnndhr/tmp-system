export type UserRole = "operator" | "master"

export interface LoginPayload {
  username: string
  password: string
}