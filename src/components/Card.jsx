import "./css/card.css"

const Card = ({chaleco}) => {
  return (
    <div className="chalecoCard">
      <div className="imgChalecoContainer">
        <img src={chaleco.img} alt={`chaleco-${chaleco.type}`} />
      </div>
      <h4>{chaleco.type}</h4>
      <p>{chaleco.info}</p>
      <div className="waveBgContainer">
        <img src="wave-card.png" alt="" />
      </div>
    </div>
  )
}

export default Card