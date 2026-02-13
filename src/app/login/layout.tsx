import Image from "next/image"
import React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen md:grid-cols-2">

        {/* LEFT SIDE - FORM */}
        <div className="flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE (HIDDEN MOBILE) */}
        <div className="relative hidden md:block">
          <Image
            src="/images/login-image.jpg"
            alt="Login Image"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </div>
  )
}