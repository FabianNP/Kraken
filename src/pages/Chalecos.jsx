import Card from "../components/Card"
import { chalecosList } from "../constants/chalecos"
import "./css/chalecos.css"

const Chalecos = () => {
  

  return (
    <section id="chalecos" className="chalecosSection">
      <div className="chalecosContainer">
        <h2>Chalecos Salvavidas</h2>
        <div className="chalecosCardsContainer">
          {chalecosList.map((chaleco, index) => {
            return(
              <Card key={index} chaleco={chaleco}/>
            )
          })}
        </div>
       
      </div>
    </section>
  )
}

export default Chalecos