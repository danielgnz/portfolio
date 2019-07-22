import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from "../../global.styles"
import Header from "../Header/header.component"
import Footer from "../Footer/footer.component"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")(`a[href*="#"]`)
  }

  const [isMenuOpen, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  const openMenu = event => {
    event.preventDefault()
    setOpen(true)
  }

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle isOpen={isMenuOpen} />
      <Header isOpen={isMenuOpen} openMenu={openMenu} closeMenu={closeMenu} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
