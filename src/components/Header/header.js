import React, { useState, useEffect } from "react"
import Logo from "../Logo/Logo"
import Navigation from "../Navigation"
import Burger from "../Burger"

import "./header.scss"

const Header = ({ path, siteTitle }) => {
  const [open, setOpen] = useState(false)

  const setOpenedHeaderState = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const header = document.querySelector(".header")
    const burger = document.querySelector(".header_burger")
    const toUp = document.querySelector('.up-container')

    open ? header.classList.add("opened") : header.classList.remove("opened")
    open ? burger.classList.add("open") : burger.classList.remove("open")
    open ? document.documentElement.classList.add('scroll-hidden') : document.documentElement.classList.remove('scroll-hidden')

    if (toUp && open) {
      toUp.classList.add('dnone')
    } else {
      toUp.classList.remove('dnone')
    }
  })

  useEffect(() => {
    const header = document.querySelector(".header")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        header.classList.add("active")
      } else {
        header.classList.remove("active")
      }

      if (window.scrollY > 500) {
        header.classList.add("fixed")
      } else {
        header.classList.remove("fixed")
      }
    })
  })

  return (
    <header className="header">
      <div className="global-container">
        <div className="header_inner">
          <Logo />
          <Navigation path={path}/>
          <Burger onClick={setOpenedHeaderState} open={setOpenedHeaderState} />
        </div>
      </div>
    </header>
  )
}

export default Header
