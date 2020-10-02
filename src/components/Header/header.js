import React, { useState, useEffect } from "react"

import Logo from "../Logo/Logo"
import Navigation from "../Navigation"
import Burger from "../Burger"

import "./header.scss"

const Header = ({ siteTitle }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.header');
    const about = document.querySelector('.about');

    window.addEventListener('scroll', () => {
      if (about.getBoundingClientRect().y < 500) {
        header.classList.add('active')
      } else {
        header.classList.remove('active')
      }

      if (about.getBoundingClientRect().y < 200) {
        header.classList.add('fixed')
      } else {
        header.classList.remove('fixed')
      }
    });

    // Обновляем заголовок документа с помощью API браузера
    // document.title = `Вы нажали ${count} раз`;
  });

  return (
    <header className="header">
      <div className="global-container">
        <div className="header_inner">
          {/*<button onClick={() => setCount(count + 1)}>*/}
          {/*  Нажми на меня*/}
          {/*</button>*/}
          <Logo />
          <Navigation />
          <Burger />
        </div>
      </div>
    </header>
  )
}

export default Header
