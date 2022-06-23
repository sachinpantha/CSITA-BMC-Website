import {React,useEffect} from 'react'
import Header from "../src/components/Header/Header"
import About from "../src/components/About/About"
import "aos/dist/aos.css"
import Aos from 'aos';
const App = () => {
  useEffect(()=>{
    Aos.init({easing:"ease",duration:700})
   })
  return (
    <div>

      <Header />
      <About />
    </div>
  )
}

export default App