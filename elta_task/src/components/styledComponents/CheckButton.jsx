import React, { useState } from 'react'
import BoxLight from '../../assets/BoxLight'
import PoppinsText from '../styledComponents/PoppinsText'
import './styles/CheckButton.css'
const CheckButton = () => {
  const [style, setStyle] = useState("check-Button")
  const handleClick = () =>{
    setStyle("checked-Button")
  }
  return (
    <div 
    className={style}
    onClick={(handleClick)}>
      <BoxLight/>
      <PoppinsText>Virtual Tour</PoppinsText>
    </div>
  )
}

export default CheckButton