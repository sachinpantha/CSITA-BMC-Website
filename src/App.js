import {React,useEffect,useState} from 'react'
import Header from "../src/components/Header/Header"
import About from "../src/components/About/About"
import Loader from './components/loader';
import Navigation from './components/Navigation';
import List from './components/List/List';
import Tlist from './components/Tlist/Tlist';
import Footer from './components/Footer/Footer'
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
      <About /><List /><Tlist /> <Footer />
      </>}
    </div>
  )
}

export default App