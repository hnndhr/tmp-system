import { createClient } from "../../services/supabase/client"
import { LoginPayload } from "./auth.types"

export async function login({ username, password }: LoginPayload) {
  const supabase = createClient()

  const email = `${username}@tmp.internal`

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    throw new Error("Username atau password salah")
  }
}