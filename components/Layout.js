import React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <div style={{ height: "300px" }}>placeholder</div>
    </>
  )
}

export default Layout
