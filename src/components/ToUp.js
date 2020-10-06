import React, { useEffect } from "react"

import arrow from "images/dominoes/arrow.png"

const ToUp = () => {
  const goToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const banner = document.querySelector(".banner")

    window.addEventListener('scroll', () => {
      if (!banner) return;

      if (banner.getBoundingClientRect().y < 0) {
        document.querySelector('.up-container').classList.add('active')
      } else {
        document.querySelector('.up-container').classList.remove('active')
      }
    })
  })

  return (
    <div
      className="up-container"
      onClick={goToUp}
    >
      <div className="up-img">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default ToUp;
