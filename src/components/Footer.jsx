import "./css/footer.css"

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footer">
        <div className="footer1">
          <img src="logomark.svg" alt="" />
          <div className="slogan">
            <h4>Nautic Kraken</h4>
            <p>Chaleco Salvavidas Profesional</p>
          </div>
        </div>
        <div className="footer2">
         <p>©Todos los derechos reservados 2023.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer