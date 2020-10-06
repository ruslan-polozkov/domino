import React, {useState} from 'react';
import { useTranslation } from "react-i18next"

const Burger = ({onClick, opened}) => {
  const { t } = useTranslation()

  return (
    <div
      className="header_burger"
      onClick={onClick}
    >
      <div
        className="burger_icon"
      />
    </div>
  )
}

export default Burger
