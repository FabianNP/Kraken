import { chalecosList } from "../constants/chalecos"
import { chalecosFront } from "../constants/chalecosCustom"
import "./css/custom.css"
import { useRef, useState } from "react"

const Custom = () => {
  const input = useRef()
  const colorsList = ["orange", "red", "green", "blue"]
  const [color, setColor] = useState(colorsList[0])

  return(
    <div className="customSection">
      <div className="customInfoContainer">
        <div className="customInfo">
          <h2>Perzonaliza tu chaleco</h2>
          <p>Si eres ditribuidor, agencia o guía de turísmo, consulta los Precios de Chalecos Salvavidas de Mayoreo además manda tu logotipo a nuestro email y nosotros lo imprimimos en tus chalecos.</p>
        </div>
        <div className="circleBack">
          <svg viewBox="0 0 558 558" width="558" height="558" fill="none" aria-hidden="true" className="circleBackSpin"><defs><linearGradient id=":R1hm:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#fff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R1hm:)" strokeLinecap="round"></path>
          </svg>
        </div>
      </div>
      <div className="custom">
        <div className="customContainer">
          <div className="customBorder"></div>
          <div className="customImages">
            <div className="customImagesContainer">
              <div className="customChalecoImgContainer">
                {/* {chalecosFront.map(chaleco => {
                  return (
                    <div key={chaleco.type}>
                    <img src={chaleco} alt="" />
                    </div>
                    )
                  })} */}
                <img className="chalecoFrontImg" src="main-green.webp" alt="" />
              </div>
              <div className="customChalecoImgContainer">
                {}
                <img className="chalecoBackImg" src="main-green.webp" alt="" />
              </div>
            </div>
          </div>
          <aside className="customTools">
            <div className="toolType">
              <h5>Chaleco</h5>
              <div className="toolTypeChalecoContainer">
                {chalecosList.map((chaleco, index) => {
                  return (
                    <button key={index}  className="toolTypeChaleco">
                      <p>{chaleco.type}</p>  
                    </button> 
                  )
                })}
              </div>
            </div>
            <div className="toolColor">
              <h5>Color</h5>
              <div className="colorButtonContainer">
                <button onClick={()=>setColor("orange")} className="colorButton colorOrange"></button>
                <button onClick={()=>setColor("green")} className="colorButton colorGreen"></button>
                <button onClick={()=>setColor("red")} className="colorButton colorRed"></button>
                <button onClick={()=>setColor("blue")} className="colorButton colorBlue"></button>
              </div>
            </div>
            <div className="toolImg">
              <h5>Logo</h5>
              <p>Arrastra tu imagen en formato .png</p>
              <div className="dropArea"> 
                <button className="logoButton" onClick={() => {
                  input.current.click()
                }} >Selecciona tu imagen</button>
                <input ref={input} className="logoInput" type='file' id='imgInput' accept=".png"/>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Custom