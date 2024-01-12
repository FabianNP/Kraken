import Hero from "./pages/Hero"
import Navbar from "./components/Navbar"
import HeroInfo from "./pages/HeroInfo"
import Chalecos from "./pages/Chalecos"
import Custom from "./pages/Custom"
import Balls from "./pages/Balls"
import Reseñas from "./pages/Reseñas"
import FrequentQuestions from "./pages/Frequent"
import Contacto from "./pages/Contacto"
import WatsappButton from "./components/Watsapp"
import './App.css'

import { useRef, useEffect, useState } from "react"

function App() {
  const documentRef = useRef(window)
  const [scroll, setScroll] = useState(false)
  const [count, setCount] = useState(0)
  

  useEffect(() => {
    const documentCurrent = documentRef.current

    const handleMenu = () => {
      if(documentCurrent.scrollY > 50 & count == 0){
        setCount(1)
        setScroll(true) 
      }else if(documentCurrent.scrollY == 0 & count == 2){
        setCount(0)
        setScroll(false)
      }else if(documentCurrent.scrollY > 50 & count == 1){
        // setScroll(true)
        setCount(2)
      }
    }
    documentCurrent.addEventListener("scroll", handleMenu)
    // console.log(documentRef.current.innerWidth)
    
    return (() => {
      documentCurrent.removeEventListener("scroll", handleMenu)
    })

  },[count])


  return (
    <div  className="app">
      <Hero scroll={scroll}/>
      <Navbar scroll={scroll} windowWidth={documentRef.current.innerWidth}/>
      <HeroInfo />
      <Chalecos />
      <Custom />
      <Balls />
      <Reseñas />
      <FrequentQuestions />
      <Contacto />
      <WatsappButton scroll={scroll}/>
    </div>
  )
}

export default App
