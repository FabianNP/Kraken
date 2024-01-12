import BallCanvas from "../components/canvas/Ball"
import { icons } from "../constants/icons"
import "./css/balls.css"

const Balls = () => {
  return (
    <section className="ballsSection">
      <div className="ballsContainer">
        {icons.map((icon, index) => {
          return (
            <div className="ballGeneralContainer" key={index}>
              <div className="ballInfo">
                <h5>{icon.title}</h5>
                <p>{icon.info}</p>
              </div>
              <div className="ballContainer">
                <BallCanvas icon={icon.icon} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Balls