import React, { useRef } from "react"
import IntroPhase from "./components/IntroPhase"
import SecCard from "./components/innercomponents/SecCard"
import OfferPhase from "./components/OfferPhase"
import HotPhase from "./components/HotPhase"
import PoshNav from "./components/PoshNav"
import Footer from "./components/Footer"
import Login from "./components/Login"
import NavItem from "./components/innercomponents/NavItem"
import images from "./components/innercomponents/asserts"

function App() {

  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const sectionRef3 = useRef(null)
  const sectionRef4 = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("Reference is undefined:", ref);
    }
  };
  

  return (
    <>
      <div className="w-full">
        <IntroPhase />
        <div className='main-page bg-[#2E3B32] h-full rounded-t-[5rem] flex justify-evenly  pt-32 px-24 mt-[-10rem] '>
          <NavItem onClick={() => scrollToSection(sectionRef1)} val={{ image: images.biriyani, title: "HotStuff" }} />
          <NavItem onClick={()=> scrollToSection(sectionRef2)} val={{ image: images.vegBiriyani, title: "Offers" }} />
          <NavItem onClick={()=> scrollToSection(sectionRef3)} val={{ image: images.biriyani, title: "Filters" }} />
          <NavItem onClick={()=>scrollToSection(sectionRef4)} val={{ image: images.biriyani, title: "About Us" }} />
        </div>
        <OfferPhase ref={sectionRef2} />
        <HotPhase ref={sectionRef1} />
        <SecCard ref={sectionRef3} />
        <Footer ref={sectionRef4} />
      </div>
    </>
  )
}

export default App
