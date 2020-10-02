import React from 'react';
import { useTranslation } from "react-i18next"

const Burger = () => {
  const { t } = useTranslation()

  return (
    <div className="header_burger">
      <div className="burger_icon" />
    </div>
  )
}

export default Burger

