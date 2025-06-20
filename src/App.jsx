import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"
import Model from "./components/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    
    <>
     <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
     </main>
     <SpeedInsights />
    </>
  )
}

export default App
