import React, { useEffect } from "react";
import Navbar from "./innercomponents/Navbar";

// images 
import images from "./innercomponents/asserts"

// components
import FoodCard from "./innercomponents/FoodCard";
import SecCard from "./innercomponents/SecCard";

// import AOS from "aos";
// import "aos/dist/aos.css";


function IntroPhase() {

    // useEffect(()=>{
    //     AOS.init({duration:800})
    // })

    return (
        <>
            <div className="mainIntro  w-full ">

                <main className={`flex flex-col justify-between items-center text-white text-3xl font-semibold tracking-widest h-[40vw] bg-cover bg-no-repeat bg-center`}  style={{
                    background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.mainImg})`,
                    backgroundRepeat:`no-repeat`,
                    backgroundSize:`cover`
                    }}
                >

                    <Navbar />
                    <span className="relative bottom-[45%] opacity-100 text-[#E3DAC9]">Open Your <span className="text-red-800 text-4xl font-serif">Hearts</span> With Feast</span>
                </main>
    
                {/* <div className=''>
                    <div className="main-page bg-[#2E3B32] h-full rounded-t-[5rem]  pt-32 px-24 mt-[-10rem]  ">
                        <SecCard/>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default IntroPhase