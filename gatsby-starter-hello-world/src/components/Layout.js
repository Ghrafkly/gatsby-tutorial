import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
