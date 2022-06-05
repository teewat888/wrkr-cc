import './App.css';
import { Header } from './components/Header'
import { Section } from './components/Section';
import { useEffect, useState } from 'react'

function App() {
   const [isNavExpanded, setIsNavExpanded] = useState(false);
   const [dimensions,setDimensions] = useState({
     height: window.innerHeight,
     width: window.innerWidth
   })
   useEffect(() => {
     let _timerId;
     const handleResize = () => {
         clearTimeout(_timerId);
         _timerId = setTimeout(() => {
           setDimensions({
             height: window.innerHeight,
             width: window.innerWidth,
           });
         }, 1000);
     }
      console.log('current width is: ',dimensions['width'])
      if (dimensions['width'] > 768){
        setIsNavExpanded(false); // if viewport is > breakpioint force collaspe menu
      } 
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      };
   })
  return (
   <>
    <Header isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
    <Section isNavExpanded={isNavExpanded} />
   </>
  );
}

export default App;
