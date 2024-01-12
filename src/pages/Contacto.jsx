import Footer from "../components/Footer"
// import { useRef } from "react"
import {} from "react-dom"
import "./css/contacto.css"

const Contacto = () => {
  // const name = useRef("") 
  // const email = useRef("") 
  // // const [email, setEmail] = useState()
  // const message = useRef("")

  // const handleSubmit = (e) => {
  //   e.preventDefault()

    
  //   name.current.value = ""
  //   email.current.value = ""
  //   message.current.value = ""
  // }

  return (
    <section id="contacto" className="contactoSection">
      <div className="contactoContainer">
        <h2>Contactanos</h2>
        {/* <form action="" id="Contactanos" onSubmit={(event) =>{handleSubmit(event)}}>
          <div className="inputContainer">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" placeholder="Nombre y Apellido"  ref={name}/>
          </div>
          <div className="inputContainer">
            <label htmlFor="email" onChange={(e)=>{console.log(e)}} >Email</label>
            <input type="email" name="email" placeholder="example@gmail.com" ref={email}/>
          </div>
          <div className="inputContainer">
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10" ref={message} placeholder="Write your message here..." />
          </div>
          <button type="submit">Enviar</button>
        </form> */}
      </div>
      <div className="contactoInformation">
        <div className="contactoItem">
          <a href="tel:+525511675702">
            <img src="llamar.png" alt="" />
            <p>+52 5511675702</p>
          </a>
        </div>
        <div className="contactoItem">
          <a href="mailto:c.nautic.kraken@gmail.com">
            <img src="correo.png" alt="" />
            <p>c.nautic.kraken@gmail.com</p>
          </a>
        </div>
        <div className="contactoItem">
          <a href="https://maps.app.goo.gl/mRUBzsSxMNmofoNA6" target="_blank" rel="noreferrer">
            <img src="mapas.png" alt="" />
            <p>Juan Colorado #120  Col. Benito Juearez Edo.de Mexico</p>
          </a>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contacto