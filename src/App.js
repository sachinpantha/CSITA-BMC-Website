import {React,useEffect,useState} from 'react'
import Header from "../src/components/Header/Header"
import About from "../src/components/About/About"
import Programs from "../src/components/Programs/Programs";
import Loader from './components/loader';
import Navigation from './components/Navigation';
import "aos/dist/aos.css"
import Aos from 'aos';
const App = () => {
  const [loader,setloader]=useState(true);
  useEffect(()=>{
    Aos.init({easing:"ease",duration:700})
   })
   useEffect(()=>{
    setTimeout(()=>{
      setloader(false);
    },2000)
   })
  return (
    <div>
      {loader?<Loader/>:<><Navigation/><Header />
      <About />
      <Programs /></>}
    </div>
  )
}

export default App