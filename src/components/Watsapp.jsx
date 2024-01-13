/* eslint-disable react/jsx-no-target-blank */
import "./css/watsapp.css"

const WatsappButton = ({ scroll }) => {
  return (
    <div className={`watsappButton ${scroll ?  "whatsappActive" : ""}`}>
      <a href="https://wa.me/525512580055?text=Hola, buen dia." target="_blank" >
        <img src="whatsapp.png" alt="" />
      </a>
    </div>
  )
}

export default WatsappButton