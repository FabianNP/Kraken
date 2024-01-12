import "./css/heroInfo.css"

const HeroInfo = () => {
  const waves = ["wave.svg", "wave1.svg", "wave2.svg"]


  return (
    <section className="heroInfoSection" id="heroInfo">
      <div className="heroInfoContainer">
        <div className="info">
          <h2>Chaleco Salvavidas Profesional</h2>
          <p>Para nosotros tu seguridad, diversión y comodidad son nuestra prioridad.</p>
          <p>Diviértete en el agua de forma segura al viajar 
            en familia o con amigos.</p>
          <h3>Es un salvavidas, si te lo pones!</h3>
          <p>El 70% de todos los accidentes mortales en actividades acuáticas resultan 
            del ahogamiento.</p>
          <p>Casi el 85% de los que se ahogan ¡No llevan un chaleco salvavidas! 
          </p>
          <p>Usar chalecos ¡SI salvavidas!</p>
        </div>
        <div className="chaleco"></div>
      </div>
      {/* <div className="imgContainers"> */}
        {waves.map((wave, index) => {
          return (
            <div key={index} className={`imgContainer imgContainer${index}`}>
              <img src={wave} alt="" />
            </div> 
          )
        })}
      {/* </div> */}
        {/* <div className="imgContainer">
          <img src="wave.svg" alt="" />
        </div>
        <div className="imgContainer">
          <img src="wave1.svg" alt="" />
        </div>    */}
    </section>
  )
}

export default HeroInfo