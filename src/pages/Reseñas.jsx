import { reseña1, reseña2, reseña3 } from "../constants/reseñas"
import "./css/reseñas.css"

const Reseñas = () => {
  const stars = (stars) => {
    const starsMap = []

      for(let i = 0; i < 5; i++){
        if(stars > i){
          starsMap.push(<img className="star" src="estrella.png" alt="" />)
        }else {
          starsMap.push(<img className="star" src="estrella-empty.png" alt="" />) 
        }
      }

      return(
        <>
          {
            starsMap.map((star) => {
              return star
            })
          }
        </>
      )
  }

  const reseñaCards = (reseña) => {
    return (
      <>
        {reseña.map((reseña, index) => {
          return (
            <div className="reseñaCard" key={index}>
              <div className="starsContainer">
                {stars(reseña.stars)}
              </div>
             <h5>{`"${reseña.title}"`}</h5>
           <p>{reseña.opinion}</p>
           </div>
          )
        })}
      </>
    )
  }

  return (
    <section id="reseñas"  className="reseñasSection">
      <div className="reseñaHero">
        <h2>Todos se protegen en el agua con Nautic Kraken</h2>
        <p>Cientos de ventas a particulares, seguro encontraras tu chaleco ideal en tu viaje de ecoturismo fabricado por nosotros.</p>
      </div>
      <div className="reseñas">
        <div className="reseñasContainer">
          <div className="carrouselContainer">
            <div className="carrousel">
              {reseñaCards(reseña1)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña1)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña1)}
            </div>
          </div>
          <div className="carrouselContainer">
            <div className="carrousel">
              {reseñaCards(reseña2)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña2)}
            </div>
          </div>
          <div className="carrouselContainer">
            <div className="carrousel">
              {reseñaCards(reseña3)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña3)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña3)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña3)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña3)}
            </div>
            <div className="carrousel">
              {reseñaCards(reseña3)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reseñas