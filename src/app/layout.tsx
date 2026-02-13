import { Lato } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}