import './App.css';
import { Header } from './components/Header'
import { Section } from './components/Section';
import { useState } from 'react'


function App() {
   const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
   <>
   <Header isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
   <Section isNavExpanded={isNavExpanded} />
   </>
  );
}

export default App;
