// import React from 'react'
import "./css/hero.css"


const Hero = ({ scroll }) => {
  return (
   <section id="hero" className={`hero ${scroll ? "heroOff" : ""}`}>
    <div className="name">
      <h5 className="nameSecondary">Chalecos Nautic</h5>
      <h1 className="namePrincipal">Kraken</h1> 
    </div>
    <div className="krakenImgDiv">
      <img className="krakenImg" src="logomark.svg" alt="" />
    </div>
    <div className="scroll">
      <a onClick={() => {
        window.scrollTo(0, 130)
      }}>
        <img className="anclaImg" src="ancla.png" alt="" />
      </a>
    </div>
   </section>
  )
}

export default Hero
