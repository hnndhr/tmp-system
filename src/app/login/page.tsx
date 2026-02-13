"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "../../components/ui/Input" // Sesuaikan path import
import Button from "../../components/ui/Button" // Sesuaikan path import
import AuthLayout from "./layout" 
import { login } from "../../features/auth/auth.service"
import { validateLogin } from "../../features/auth/auth.validators"

export default function LoginPage() {
  const router = useRouter()
  // ... (State kamu biarkan sama)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{username?: string, password?: string}>({})
  const [isLoading, setIsLoading] = useState(false)
  const [generalError, setGeneralError] = useState<string | null>(null)

  // ... (Function handleLogin biarkan sama)
  async function handleLogin() {
    // ... logic login kamu ...
  }

  // PERUBAHAN TAMPILAN DISINI:
  return (
    <AuthLayout> {/* Bungkus konten dengan AuthLayout */}
      
      {/* Hapus div bg-black, ganti dengan struktur yang bersih */}
      <div className="w-full"> 
        <h1 className="mb-2 text-4xl font-normal text-primary"> {/* Sesuaikan font & warna */}
          Sign In
        </h1>

        <p className="mb-8 text-sm text-gray-400">
          Enter your username and password below
        </p>

        <div className="space-y-4">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errors.username}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          {generalError && (
            <p className="text-sm text-red-500">
              {generalError}
            </p>
          )}

          <Button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </div>
      </div>
    </AuthLayout>
  )
}