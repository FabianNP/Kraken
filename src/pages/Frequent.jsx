import { questions } from "../constants/questions"
import {  useState } from "react"
import "./css/frequentQuestions.css"

const FrequentQuestions = () => {
  const [questionActive, setQuestionActive] = useState(null)

  const handleQuestionClick = (index) => { 
    setQuestionActive((prev) => {
      if(index === prev){
        return null
      }else{
        return index
      }
    })
  }

  return (
    <section id="faqs" className="questionsSection">
      <h2>Preguntas Frecuentes</h2>
      <div className="questions">
        {questions.map((question) => {
          return (
            <div 
              className={`questionContainer ${questionActive == question.key ? "active":""}`} 
              key={question.key} 
              onClick={() => handleQuestionClick(question.key)}
            >
              <h4>{question.title}</h4>
              <div className="infoContainer">
                <div className="infoElement">
                  <p>{question.info}</p>            
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FrequentQuestions