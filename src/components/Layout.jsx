import React from "react";
import Sidebar from "./Base/Sidebar";
import Footer from "./Base/Footer";

export default function Layout({ children }) {
  return (
      <>
          <Sidebar />
          <main>
              {children}
          </main>
          <Footer />
      </>
  )
}
