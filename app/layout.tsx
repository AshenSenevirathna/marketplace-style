import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { ReactNode } from "react"

export const metadata = {
  title: "Travel Experience Platform"
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  )
}